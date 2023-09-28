import "./About.css";

function App() {
  const about1 =
    "Hello! Thanks for stopping by my website. At present this website exists because I wanted to learn React and also because I wanted to have a website to demonstrate some of my work and passions. Simple problems on paper, but I am a man of many interests.";

  return (
    <div className="main-content">
      <h2 className="about-header">About Me</h2>
      <p className="about-text">{about1}</p>
    </div>
  );
}

export default App;
