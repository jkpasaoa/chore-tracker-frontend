import { Link } from "react-router-dom";

function Chore({ chore, id }) {
  // const date = new Date(transaction.date);
  // const year = date.getFullYear();
  // const month = date.toLocaleString('default', { month: 'short' });
  // const day = date.getDate();

  // const dateFormat = `${month} ${day}, ${year}`;

  return (
    <tr>
      <td>
        {/* {dateFormat} */}
      </td>
      <td>
        <Link to={`/chores/${id}`}>{chore.name}</Link>
      </td>
      <td>
        <h5>{chore.status}</h5>
      </td>
    </tr>
  );
}

export default Chore;