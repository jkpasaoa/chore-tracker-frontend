import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewChore() {
  const navigate = useNavigate();

  const [chore, setChore] = useState({
    name: "",
    description: "",
    due_date: "",
    status: "",
    points: 1, // Set a default value within the valid range
    priority: "",
    category: ""
  });

  const handleTextChange = (event) => {
    setChore({ ...chore, [event.target.id]: event.target.value });
  };

  // const handleSelectChange = (event) => {
  //   setChore({ ...chore, [event.target.id]: event.target.value });
  // };  

  const handlePriorityChange = (event) => {
    setChore({ ...chore, priority: event.target.value });
  };

  const handleStatusChange = (event) => {
    setChore({ ...chore, status: event.target.value });
  };

  const handleCategoryChange = (event) => {
    setChore({ ...chore, category: event.target.value });
  };

  const addChore = async (newChore) => {
    try {
      if (newChore.points < 1 || newChore.points > 5) {
        throw new Error("Points value must be between 1 and 5.");
      }

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
      due_date: "",
      status: "",
      points: 1,
      priority: "",
      category: ""
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addChore(chore);
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
          onChange={handleStatusChange}
          required
        >
          <option value=""></option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <br />
        <label htmlFor="points">Points:</label>
        <input
          className="form-control"
          id="points"
          type="number"
          value={chore.points}
          min={1}
          max={5}
          onChange={handleTextChange}
          required
        />
        <br />
        <label htmlFor="Priority">Priority:</label>
        <select
          className="form-select"
          id="priority"
          type="text"
          value={chore.priority}
          onChange={handlePriorityChange}
          required
        >
          <option value=""></option>
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
          onChange={handleCategoryChange}
          required
        >
          <option value=""></option>
          <option value="Cleaning">Cleaning</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Pet Care">Pet Care</option>
          <option value="Gardening">Gardening</option>
        </select>
        <br />
        <input
          className="btn btn-primary"
          type="submit"
          value="Submit New Chore"
        />
        &nbsp;&nbsp;
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleClear}
        >
          Clear Fields
        </button>
      </form>
    </div>
  );
}

export default NewChore;
