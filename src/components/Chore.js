import { Link } from "react-router-dom";

function Chore({ chore }) {
  return (
    <tr>
      <td className="title">
        <h4>{chore.name}</h4>
        <p>{chore.description}</p>
        <Link to={`/chores/${chore.id}`} className="btn btn-primary">
          View Details
        </Link>
      </td>
      <td className="due_date">{chore.due_date}</td>
      <td className="status">{chore.status}</td>
      <td className="points">{chore.points}</td>
      <td className="priority">{chore.priority}</td>
      <td className="category">{chore.category}</td>
    </tr>
  );
}

export default Chore;
