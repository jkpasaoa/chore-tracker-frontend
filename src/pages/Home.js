import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
      <h2>Welcome</h2>
      <h3>To Chore Wizard!</h3>
      Click<span>&nbsp;</span>
      <Link to="/chores">
        <span>Budgeted Transactions</span>
      </Link>
    </div>
  );
}

export default Home;