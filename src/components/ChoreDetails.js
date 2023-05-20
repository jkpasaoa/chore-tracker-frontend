import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "../index.css"

const API = process.env.REACT_APP_API_URL;

function ChoreDetails() {
  let navigate = useNavigate()
  const [chore, setChores] = useState({});
  let { index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/chores/${index}`)
      .then((response) => {
        setChores(response.data)
      }).catch(() => {
        navigate("/not-found")
      })
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/chores/${index}`)
      .then(() => {
        navigate(`/chores`)
      })
      .catch((e) => console.error(e))
  };

  return (
    <article className="container container-fluid text-center">
      <table>
        <tbody>
          <tr>
            <th>Chore Updated Date:</th>
            <td>{chore.updated_at}</td>
          </tr>
          <tr>
            <th>Chore Creation Date:</th>
            <td>{chore.created_at}</td>
          </tr>
          <tr>
            <th>Chore:</th>
            <td>{chore.name}</td>
          </tr>
          <tr>
            <th>Description:</th>
            <td>{chore.description}</td>
          </tr>
          <tr>
            <th>Status:</th>
            <td>
              {chore.status}
              <br />
            </td>
          </tr>
          <tr>
            <th>ID #:</th>
            <td>{chore.id}</td>
          </tr>
          <tr>
            <th>Due Date:</th>
            <td>{chore.due_date}</td>
          </tr>
          <tr>
            <th>Points:</th>
            <td>{chore.points}</td>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="button-container">
                <div>
                  <Link to={`/chores`}>
                    <button className="back-button">Back</button>
                  </Link>
                </div>
                <br />
                <div>
                  <Link className="edit-button" to={`/chores/${index}/edit`}>
                    <button className="edit-button-title">Edit</button>
                  </Link>
                </div>
                <br />
                <div>
                  <button className="delete" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

export default ChoreDetails;
