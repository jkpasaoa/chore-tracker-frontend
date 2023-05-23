import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function NewChore() {
  const navigate = useNavigate();
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

  const handleNumberChange = (event) => {
    setChore({ ...chore, [event.target.id]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setChore({ ...chore, [event.target.id]: event.target.value })
  }

  const addChore = () => {
    axios
      .post(`${API}/chores`, chore)
      .then(() => {
        navigate('/chores');
      }).catch((c) => console.error("catch", c))
  }

  const handleClear = () => {
    setChore({
      name: "",
      description: "",
      due_date: 0,
      status: "",
      created_at: "",
      updated_at: ""
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addChore()
    handleClear();
  };


  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="name">
          Name:
        </label>
        <input
          className="form-control"
          id="name"
          type="text"
          onChange={handleTextChange}
          placeholder="name"
          value={chore.name}
        />
        <br />
        <label className="form-label" htmlFor="description">
          Description:
        </label>
        <input
          className="form-control"
          id="description"
          type="text"
          onChange={handleTextChange}
          placeholder="description"
          value={chore.description}
        />
        <br />
        <label className="form-label" htmlFor="due_date">
          Due Date:
        </label>
        <input
          className="form-control"
          id="due_date"
          type="text"
          onChange={handleTextChange}
          placeholder="due date"
          value={chore.due_date}
        />
        <br />
        <label className="form-label" htmlFor="status">
          Status:
        </label>
        <input
          className="form-control"
          id="status"
          type="text"
          placeholder="status"
          onChange={handleTextChange}
          value={chore.status}
        />
        <br />
        <label className="form-label" htmlFor="created_at">
          Created At:
        </label>
        <input
          className="form-control"
          id="created_at"
          type="text"
          placeholder="created at"
          onChange={handleTextChange}
          value={chore.created_at}
        />
        <br />
        <label className="form-label" htmlFor="updated_at">
          Updated At:
        </label>
        <input
          className="form-control"
          id="updated_at"
          type="text"
          placeholder="updated at"
          onChange={handleTextChange}
          value={chore.updated_at}
        />
        <br />
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
        <input
          className="btn btn-primary"
          type="submit"
          value={"Submit New Chore"}
        />
        <button className="btn btn-secondary" type="button" onClick={handleClear}>
          Clear Fields
        </button>
      </form>
    </div>
  );
}

export default NewChore;
