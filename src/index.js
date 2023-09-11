import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function Avatar() {
  const avatarUrl = "Ami_Enan.png";
  return <img src={avatarUrl} alt="portrait" className="avatar"></img>;
}

function Intro() {
  // https://lupin.fandom.com/wiki/Ami_Enan
  return (
    <div>
      <h1>Ami Enan</h1>
      <h3 style={{ fontStyle: "italic" }}>From "Lupin the 3rd Part 5"</h3>
      <p>
        Hello, Underworld! Ami Enan is the daughter of Enzo Bron, CEO of the IT
        conglomerate Shake Hanz Corporation currently at age fourteen. Ami was
        kidnapped when she was six and later she demonstrated the talent in
        computer programming during her imprisonment. When the gangsters noticed
        this, they kept Ami and used her programming skills for their own
        profit. One of her major works in that time was the establishment of the
        darkweb site Marco Polo and its transaction and payment system.
      </p>
    </div>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.level}</span>
    </li>
  );
}

function SkillList() {
  const skills = [
    { name: "Artificial Intelligence", level: "💪", color: "green" },
    { name: "Computer Programming", level: "💪", color: "blue" },
    { name: "Computer Hacking", level: "💪", color: "yellow" },
    { name: "Computer Security", level: "💪", color: "red" },
  ];
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill
          name={skill.name}
          level={skill.level}
          color={skill.color}
          key={skill.name}
        />
      ))}
    </ul>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
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
