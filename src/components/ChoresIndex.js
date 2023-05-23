import { useState, useEffect } from "react";
import Chore from "./Chore";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Chores() {
  const [chores, setChores] = useState([]);

  const fetchChores = () => {
    axios
      .get(`${API}/chores`)
      .then((response) => setChores(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchChores();
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
              <th></th>
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
