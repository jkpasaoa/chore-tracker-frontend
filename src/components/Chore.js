import { Link } from "react-router-dom";

function Chore({ chore }) {
  return (
    <tr>

      <td className="title">

        <Link to={`/chores/${chore.id}`}
        >
          {chore.name}
        </Link>
      </td>
      <td className="description">{chore.description}</td>
      <td className="due_date">{chore.due_date}</td>
      <td className="status">{chore.status}</td>
      <td className="points">{chore.points}</td>
      <td className="priority">{chore.priority}</td>
      <td className="category">{chore.category}</td>

    </tr>
  );
}

export default Chore;