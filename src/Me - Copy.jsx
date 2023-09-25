import headshot from "./assets/headshot_edited.jpg";
import "./Me.css";

class Me extends React.Component {
  constructor(props) {
    super(props)
    this.descriptors = [
      "Software Engineer",
      "Data Engineer",
      "Rocket League Afficianado",
      "Ultimate Frisbee God",
      "Speed Demon in the Rink",
    ];
    this.descriptorIdx = 0;
  }

  descriptorCounter() {
    ++this.descriptorIdx % this.descriptors.length;
  }

  //useEffect = (() => {
    //const interval = setInterval(() => handleTextChange(), 1000);
    //return () => clearInterval(interval);
  //}, []);

  render() {
    return (
      <div>
        <div className="nav-bar">
          <h1>test</h1>
        </div>
        <div className="main-content">
          <h1 className="headshot-text">Aidan Tokarski</h1>
          {/*<h2 className="headshot-descriptor">{this.descriptors[this.descriptorIdx]}</h2>*/}
          <img src={headshot} className="headshot" />
        </div>
      </div>
    );
  }
}

export default Me;