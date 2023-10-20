import headshot from "./assets/headshot_edited.jpg";
import React from "react";
import "./Me.css";

class Me extends React.Component {
  constructor(props) {
    super(props);
    this.descriptors = [
      "Disc-Jockey of (Very) Local Renown",
      "Rocket League Afficianado",
      "Alto Sax Wizard",
      "Ultimate Frisbee God",
      "NECHA's 2nd Greatest Backchecker",
      "Winter Sheltering Solutions Engineer"
    ];
    this.state = {
      count: 0,
    };
  }

  setCount() {
    this.setState({ count: (this.state.count + 1) % this.descriptors.length });
  }

  componentDidMount() {
    this.countID = setInterval(
      () => this.setCount(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.countID);
  }

  render() {

    return (
      <div>
        <div>
          <h1 className="headshot-text">Aidan Tokarski</h1>
          <h2 className="headshot-descriptor">
            Software Engineer, Data Engineer, and 
          </h2>
          <h2 className="headshot-descriptor">
          {this.descriptors[this.state.count]}
          </h2>
          <img src={headshot} className="headshot" />
        </div>
      </div>
    );
  }
}

export default Me;
