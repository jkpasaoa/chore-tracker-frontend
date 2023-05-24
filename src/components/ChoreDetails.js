import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Table, Button, ButtonGroup } from "react-bootstrap";

import "../index.css";

const API = process.env.REACT_APP_API_URL;

function ChoreDetails() {
  let navigate = useNavigate();
  const [chore, setChores] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/chores/${id}`)
      .then((response) => {
        setChores(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/chores/${id}`)
      .then(() => {
        navigate(`/chores`);
      })
      .catch((e) => console.error(e));
  };

  return (
    <Container className="text-center">
      <Table>
        <tbody>
          <tr>
            <th>Chore:</th>
            <td>{chore.name}</td>
          </tr>
          <tr>
            <th>Description:</th>
            <td>{chore.description}</td>
          </tr>
          <tr>
            <th>Due Date:</th>
            <td>{chore.due_date}</td>
          </tr>
          <tr>
            <th>Status:</th>
            <td>{chore.status}</td>
          </tr>
          <tr>
            <th>Points:</th>
            <td>
              {chore.points}
              <br />
            </td>
          </tr>
          <tr>
            <th>Priority:</th>
            <td>{chore.priority}</td>
          </tr>
          <tr>
            <th>Category</th>
            <td>{chore.category}</td>
          </tr>
          <tr>
            <td colSpan="2">
              <ButtonGroup>
                <Link to={`/chores`}>
                  <Button variant="secondary">Back</Button>
                </Link>
                <Link className="edit-button" to={`/chores/${id}/edit`}>
                  <Button variant="primary">Edit</Button>
                </Link>
                <Button variant="danger" onClick={handleDelete}>
                  Delete
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default ChoreDetails;


// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";

// import "../index.css"

// const API = process.env.REACT_APP_API_URL;

// function ChoreDetails() {
//   let navigate = useNavigate()
//   const [chore, setChores] = useState({});
//   let { id } = useParams();

//   useEffect(() => {
//     axios
//       .get(`${API}/chores/${id}`)
//       .then((response) => {
//         setChores(response.data)
//       }).catch(() => {
//         navigate("/not-found")
//       })
//   }, [id, navigate]);

//   const handleDelete = () => {
//     axios
//       .delete(`${API}/chores/${id}`)
//       .then(() => {
//         navigate(`/chores`)
//       })
//       .catch((e) => console.error(e))
//   };

//   return (
//     <article className="container container-fluid text-center">
//       <table>
//         <tbody>
//           <tr>
//             <th>Chore:</th>
//             <td>{chore.name}</td>
//           </tr>
//           <tr>
//             <th>Description:</th>
//             <td>{chore.description}</td>
//           </tr>
//           <tr>
//             <th>Due Date:</th>
//             <td>{chore.due_date}</td>
//           </tr>
//           <tr>
//             <th>Status:</th>
//             <td>{chore.status}</td>
//           </tr>
//           <tr>
//             <th>Points:</th>
//             <td>
//               {chore.points}
//               <br />
//             </td>
//           </tr>
//           <tr>
//             <th>Priority:</th>
//             <td>{chore.priority}</td>
//           </tr>
//           <tr>
//             <th>Category</th>
//             <td>{chore.category}</td>
//           </tr>
//           <tr>
//             <td colSpan="2">
//               <div className="button-container">
//                 <div>
//                   <Link to={`/chores`}>
//                     <button className="back-button">Back</button>
//                   </Link>
//                 </div>
//                 <br />
//                 <div>
//                   <Link className="edit-button" to={`/chores/${id}/edit`}>
//                     <button className="edit-button-title">Edit</button>
//                   </Link>
//                 </div>
//                 <br />
//                 <div>
//                   <button className="delete" onClick={handleDelete}>
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </article>
//   );
// }

// export default ChoreDetails;
