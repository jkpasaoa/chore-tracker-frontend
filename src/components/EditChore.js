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

  const handleNumberChange = (event) => {
    setChore({ ...chore, [event.target.id]: event.target.value });
  };

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
        <label htmlFor="date">Date:</label>
        <input
          className="form-control"
          id="date"
          value={chore.date}
          type="text"
          onChange={handleTextChange}
          placeholder="date"
          required
        />
        <br />
        <label htmlFor="itemName" className="form-label">Name:</label>
        <input
          className="form-control"
          id="itemName"
          type="text"
          value={chore.itemName}
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <br />
        <label className="form-label" htmlFor="amount">
          Amount:
        </label>
        <input
          className="form-control"
          id="amount"
          type="number"
          value={chore.amount}
          onChange={handleNumberChange}
          required
        />
        <br />
        <label htmlFor="form-label">Category:</label>
        <select
          className="form-select"
          id="category"
          type="text"
          checked={chore.category}
          onChange={handleSelectChange}
        >
          <option value="income">Income</option>
          <option value="gift">Gift</option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="medical">Medical</option>
          <option value="bill">Bill</option>
          <option value="groceries">Groceries</option>
          <option value="transportation-related">Transportation-related</option>
        </select>
        <br />
        <input className="btn btn-primary" type="submit" />
      </form>
      <Link to={`/chores/${id}`}>
        <br />
        <button className="btn btn-secondary">Nevermind!</button>
      </Link>
    </div>
  );
}

export default EditChore;
