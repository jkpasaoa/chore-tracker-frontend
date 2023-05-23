import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container-error">
      <div className="error">
        <h1>Return to Homepage</h1>
        <button>
          <Link to="/chores" style={{ color: "black", textDecoration: "none" }}>
            Back To All Chores
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
