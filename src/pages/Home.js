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
        Click to&nbsp;
        <Link to="/chores">
          View All Chores
        </Link>
      </p>
      <br />
      <div style={{ width: '320px', height: '320px' }}>
        <Image
          src={washingHands}
          alt="washhands"
          fluid
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}

export default Home;

