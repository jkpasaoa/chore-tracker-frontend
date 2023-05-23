import { useState, useEffect } from "react";
import Chore from "./Chore";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
//console.log(API, "Testing api");

function Chores() {
  const [chores, setChores] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/chores`)
      .then((response) => setChores(response.data))
      .catch((e) => console.error(e));
  }, []);

  const totalAmount = () => {
    let total = 0;
    chores.forEach((chore) => {
      total += Number(chore.points);
    });
    return total;
  };

  let totalColor = "";
  if (totalAmount() > 100) {
    totalColor = "text-success";
  } else if (totalAmount() >= 0) {
    totalColor = "text-warning";
  } else {
    totalColor = "text-danger";
  }

  return (
    <div className="Chores">
      <h3 className={totalColor}>Chore Points: {totalAmount()} </h3>
      <section>
        <table className="table table-striped table-hover text-center">
          <thead>
          <tr>
              <th colSpan="8" className="chore-title">
              </th>
            </tr>
            <tr>
              <th>Chore/Description</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Points</th>
              <th>Priority</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {chores.map((chore, id) => {
              return (
                <Chore
                  key={chore.id}
                  chore={chore}
                  // id={id}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Chores;
