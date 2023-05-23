import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import washingHands from "../assets/washingHands.jpg";

function Home() {
  return (
    <div className="Home" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
      <h2>Welcome</h2>
      <h3>To Chore Wizard!</h3>
      <p className="text-left">
        <br />
        Click to<span>&nbsp;</span>
        <Link to="/chores">
          View All Chores
        </Link>
      </p>
      <br />
      <Image
        src={washingHands}
        alt="washhands"
        Square
        width="320"
      />
    </div>
  );
}

export default Home;
