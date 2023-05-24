import { useState } from "react";
import { Link } from "react-router-dom";
import { Image, Form, Button } from "react-bootstrap";
import washingHands from "../assets/washingHands.jpg";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform logging in here
    console.log("Email:", email);
    console.log("Password:", password);
    // setIsLoggedIn(true); // Update login status
  };

  return (
    <div className="Home" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
      <h2>Welcome</h2>
      <h3>To Chore Wizard!</h3>
      {/* {isLoggedIn ? (
        <p className="text-left">
          <br />
          Click to&nbsp;
          <Link to="/chores">
            View All Chores
          </Link>
        </p>
      ) : null}
      <br /> */}
      <div style={{ width: '320px', height: '320px' }}>
        <Image
          src={washingHands}
          alt="washhands"
          fluid
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <br />
        <Link to={`/chores`}>
          <Button variant="primary" type="submit">
            Login
          </Button></Link>
      </Form>
    </div>
  );
}

export default Home;

// import { Link } from "react-router-dom";
// import { Image } from "react-bootstrap";
// import washingHands from "../assets/washingHands.jpg";

// function Home() {
//   return (
//     <div className="Home" style={{ maxWidth: '500px', margin: '0 auto', paddingTop: '50px' }}>
//       <h2>Welcome</h2>
//       <h3>To Chore Wizard!</h3>
//       <p className="text-left">
//         <br />
//         Click to&nbsp;
//         <Link to="/chores">
//           View All Chores
//         </Link>
//       </p>
//       <br />
//       <div style={{ width: '320px', height: '320px' }}>
//         <Image
//           src={washingHands}
//           alt="washhands"
//           fluid
//           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//         />
//       </div>
//     </div>
//   );
// }

// export default Home;