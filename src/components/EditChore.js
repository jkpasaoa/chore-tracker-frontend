import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function EditChore() {
  const navigate = useNavigate();
  let { id } = useParams();

  const [chore, setChore] = useState({
    name: "",
    description: "",
    due_date: 0,
    status: "",
    created_at: "",
    updated_at: ""
  });

  const handleTextChange = (event) => {
    setChore({ ...chore, [event.target.id]: event.target.value });
  };

  // const handleNumberChange = (event) => {
  //   setChore({ ...chore, [event.target.id]: event.target.value });
  // };

  const handleSelectChange = (event) => {
    setChore({ ...chore, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`${API}/chores/${id}`)
      .then((response) => {
        setChore(response.data)
      })
      .catch((e) => console.error(e))

  }, [id]);


  const updateChore = () => {
    axios
      .put(`${API}/chores/${id}`, chore)
      .then((response) => {
        setChore(response.data);
        navigate(`/chores/${id}`)
      }
      )
      .catch((e) => console.error(e));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateChore();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="due_date">Date:</label>
        <input
          className="form-control"
          id="due_date"
          value={chore.due_date}
          type="text"
          onChange={handleTextChange}
          placeholder="date"
          required
        />
        <br />
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          className="form-control"
          id="name"
          type="text"
          value={chore.name}
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <br />
        <label className="form-label" htmlFor="description">
          Description:
        </label>
        <input
          className="form-control"
          id="description"
          type="text"
          value={chore.description}
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="status">Status:</label>
        <select
          className="form-select"
          id="status"
          type="text"
          value={chore.status}
          onChange={handleSelectChange}
        >
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <br />
        <input className="btn btn-primary" type="submit" />
      </form>
      <Link to={`/chores/${id}`}>
        <br />
        <button className="btn btn-secondary">Cancel</button>
      </Link>
    </div>
  );
}

export default EditChore;
