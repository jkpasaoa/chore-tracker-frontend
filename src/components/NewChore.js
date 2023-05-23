import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function NewChore(props) {
  const navigate = useNavigate();

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

  // const handleNumberChange = (event) => {
  //   setChore({ ...chore, [event.target.id]: event.target.value });
  // };

  const handleSelectChange = (event) => {
    setChore({ ...chore, [event.target.id]: event.target.value })
  }

  const addChore = async (newChore) => {
    try {
      const response = await axios.post(`${API}/chores`, newChore);
      if (response.data) {
        console.log(response.data);
        navigate(`/chores`);
      } else {
        throw new Error("Error adding chore");
      }
    } catch (error) {
      console.error(error);
      alert("Error adding chore");
    }
  };

  const handleClear = () => {
    setChore({
      name: "",
    description: "",
    due_date: 0,
    status: "",
    points: 0,
    priority: "",
    category: ""
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addChore(chore)
    handleClear();
  };


  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="due_date">Date:</label>
        <input
          className="form-control"
          id="due_date"
          value={chore.due_date}
          type="text"
          onChange={handleTextChange}
          placeholder="YYYY-DD-MM Write the Date in this format"
          required
        />
        <br />
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          className="form-control"
          id="name"
          type="text"
          value={chore.name}
          onChange={handleTextChange}
          placeholder="Name of Chore"
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
          placeholder="Describe the chore"
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
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <br />
        <label htmlFor="Priority">Priority:</label>
        <select
          className="form-select"
          id="priority"
          type="text"
          value={chore.priority}
          onChange={handleSelectChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <br />
        <label htmlFor="category">Category:</label>
        <select
          className="form-select"
          id="category"
          type="text"
          value={chore.category}
          onChange={handleSelectChange}
        >
          <option value="Cleaning">Cleaning</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Pet Care">Pet Care</option>
          <option value="Gardening">Gardening</option>
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
