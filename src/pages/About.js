import React from "react";
import { Image, Card } from "react-bootstrap";
import Jacqueline from "../assets/Jacqueline.jpg";

function About() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", paddingTop: "100px" }}>
      <Card className="about-card">
        <Card.Body>
          <div className="text-left">
            <h4>
              Chore Wizard is an app designed to help parents manage their children's chores, fostering responsibility and accountability. By providing an organized system for assigning and tracking tasks, it simplifies household management and strengthens the parent-child bond.
            </h4>
            <br />
            <h4>
              The creator, drawing from her experience in babysitting, understands the challenges parents face and aims to alleviate their burden. Chore Wizard's user-friendly interface allows parents to easily assign chores, set deadlines, and monitor progress, empowering children and creating a more efficient household. With the goal of making parenting easier and more enjoyable, Chore Wizard is a valuable tool for any parent seeking to instill essential life skills and maintain a harmonious family environment.
            </h4>
            <br />
          </div>
          <h3 className="text-center">
            Follow <a href="https://www.linkedin.com/in/jacquelinepasaoa/">Jacqueline Pasaoa</a> on LinkedIn!
          </h3>
          <div className="d-flex justify-content-center">
            <div className="mr-4">
              <a href="https://www.linkedin.com/in/jacquelinepasaoa/" target="_blank" rel="noopener noreferrer">
                <Image src={Jacqueline} alt="Jacqueline Pasaoa" roundedCircle width="150" />
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;


// import { Image } from "react-bootstrap";
// import Jacqueline from "../assets/Jacqueline.jpg";

// function About() {
//   return (
//     <div style={{ maxWidth: '1000px', margin: '0 auto', paddingTop: '100px' }}>
//       <div className="text-left">
//         <p>
//           <h4>
//             &emsp; Chore Wizard is an app designed to help parents manage their children's chores, fostering responsibility and accountability. By providing an organized system for assigning and tracking tasks, it simplifies household management and strengthens the parent-child bond.
//           </h4>
//           <br />
//           <h4>
//             &emsp; The creator, drawing from her experience in babysitting, understands the challenges parents face and aims to alleviate their burden. Chore Wizard's user-friendly interface allows parents to easily assign chores, set deadlines, and monitor progress, empowering children and creating a more efficient household. With the goal of making parenting easier and more enjoyable, Chore Wizard is a valuable tool for any parent seeking to instill essential life skills and maintain a harmonious family environment.
//           </h4>
//           <br />
//         </p>
//       </div>
//       <h3 className="text-center">Follow&nbsp;&nbsp;
//         <a href="https://www.linkedin.com/in/jacquelinepasaoa/">Jacqueline Pasaoa</a>&nbsp;&nbsp;on LinkedIn!
//       </h3>
//       <div className="d-flex justify-content-center">
//         <div className="mr-4">
//           <a
//             href="https://www.linkedin.com/in/jacquelinepasaoa/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               src={Jacqueline}
//               alt="Jacqueline Pasaoa"
//               roundedCircle
//               width="150"
//             /></a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;
