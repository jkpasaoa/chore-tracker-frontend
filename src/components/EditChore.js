import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";


const API = process.env.REACT_APP_API_URL;

function EditChore() {
  const navigate = useNavigate();
  let { id } = useParams();

  const [chore, setChore] = useState({
    name: "",
    description: "",
    due_date: "",
    status: "",
    points: 0,
    priority: "",
    category: ""
  });

  const handleTextChange = (event) => {
    setChore({ ...chore, [event.target.id]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setChore({ ...chore, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/chores/${id}`)
      .then((response) => {
        setChore(response.data);
      })
      .catch((e) => console.error(e));
  }, [id]);

  const updateChore = () => {
    axios
      .put(`${API}/chores/${id}`, chore)
      .then((response) => {
        setChore(response.data);
        navigate(`/chores/${id}`);
      })
      .catch((e) => console.error(e));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateChore();
  };

  return (
    <div className="Edit">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="due_date">
          <Form.Label>Date:</Form.Label>
          <Form.Control
            value={chore.due_date}
            type="text"
            onChange={handleTextChange}
            placeholder="YYYY-DD-MM Write the Date in this format"
            required
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={chore.name}
            onChange={handleTextChange}
            placeholder="Name of Chore"
            required
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            value={chore.description}
            onChange={handleTextChange}
            placeholder="Describe the chore"
            required
          />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Status:</Form.Label>
          <Form.Select
            value={chore.status}
            onChange={handleSelectChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="priority">
          <Form.Label>Priority:</Form.Label>
          <Form.Select
            value={chore.priority}
            onChange={handleSelectChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="category">
          <Form.Label>Category:</Form.Label>
          <Form.Select
            value={chore.category}
            onChange={handleSelectChange}
          >
            <option value="Cleaning">Cleaning</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Pet Care">Pet Care</option>
            <option value="Gardening">Gardening</option>
          </Form.Select>
        </Form.Group>
        <br />
        <Row>
          <Col>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Col>
          <Col>
            <Link to={`/chores/${id}`}>
              <Button variant="secondary">Cancel</Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default EditChore;
