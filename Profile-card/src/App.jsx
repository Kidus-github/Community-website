import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skills />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <>
      <img src="avatar.jpg" alt="avatar" />
    </>
  );
}
function Intro() {
  return (
    <div className="intro">
      <h2>Kidus Girma</h2>
      <p>
        Full-stack web developer with 3 years of experiances in various
        technologies. While i am not coding i like hanging out with my friends,
        read or watch movie.
      </p>
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>
        {skill} <span>{emoji}</span>
      </p>
    </div>
  );
}
function Skills() {
  return (
    <div className="skills">
      <Skill color="blue" skill="HTML + CSS" emoji="💪" />
      <Skill color="red" skill="JavaScript" emoji="🚀" />
      <Skill color="gray" skill="React" emoji="⚛️" />
      <Skill color="brown" skill="Node.JS" emoji="🌐" />
      <Skill color="purple" skill="MySQL" emoji="🎇" />
    </div>
  );
}

export default App;
