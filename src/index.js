import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="jeffk.jpg" alt="Jeff Kessie" />;
}

function Intro() {
  return (
    <div>
      <h1>Jeff Kessie</h1>
      <p>
      I’m a senior cybersecurity analyst with a passion for protecting digital landscapes and solving complex security challenges. 
      When I'm not immersed in code or defending systems from cyber threats, you'll find me diving into a good book, or exploring new recipes in the kitchen.
      I have a deep love for traveling and experiencing the world through its diverse cultures and cuisines.

      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👍" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="Nessus" emoji="👍" color="yellow" />
      <Skill skill="AWS" emoji="💪" color="orangered" />
      <Skill skill="Azure" emoji="💪" color="blue" />
      <Skill skill="Python" emoji="💪" color="green" />
      <Skill skill="JavaScript" emoji="👍" color="yellow" />
      <Skill skill="Git and Github" emoji="👍" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
