import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Table, Button, ButtonGroup, Modal } from "react-bootstrap";

import "../index.css";

const API = process.env.REACT_APP_API_URL;

function ChoreDetails() {
  let navigate = useNavigate();
  const [chore, setChores] = useState({});
  const [showConfirm, setShowConfirm] = useState(false);

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

  //---------
  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleCancelClick = () => {
    navigate(`/chores`);
    setShowConfirm(false);
  };

  const handleConfirmClick = () => {
    handleDelete();
    setShowConfirm(false);
  };

  return (
    <Container className="text-center">
      <Table className="table-shadow">
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
                  <Button variant="secondary">Back</Button>&nbsp;&nbsp;
                </Link>
                <Link className="edit-button" to={`/chores/${id}/edit`}>
                  <Button variant="primary">Edit</Button>&nbsp;&nbsp;
                </Link>
                <button
                  onClick={handleDeleteClick}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
                {/* <Button variant="danger" onClick={handleDelete}>
                  Delete
                </Button> */}
                <Modal show={showConfirm} onHide={handleCancelClick}>
                  <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you sure you want this chore to be deleted?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelClick}>
                      No
                    </Button>
                    <Button variant="danger" onClick={handleConfirmClick}>
                      Yes
                    </Button>
                  </Modal.Footer>
                </Modal>

              </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default ChoreDetails;
