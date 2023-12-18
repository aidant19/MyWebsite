import "./About.css";

function About() {
  const about1 =
    "Hello! My name is Aidan Tokarski and I am a software and data engineer from Boston Massachusetts. I have worked with eSports analysis, mathematical modelling, residential energy infrastructure, and reinforcement learning. As a passionate learner my skillset is always expanding, but my strengths lie in working with Python, Java, SQL, and data analysis. I was once a hopeful competitive Rocket League player, but after I started working with analysis my path became clear. Though I still enjoy the occasional casual tournament. I am not much of a front-end developer as this website reflects, but I am always improving!";

  return (
    <div>
      <h2 className="about-header">About Me</h2>
      <p className="about-text">{about1}</p>
    </div>
  );
}

export default About;
