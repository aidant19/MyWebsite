import headshot from "./assets/headshot_edited.jpg";
import React from "react";
import "./Me.css";

class Me extends React.Component {
  constructor(props) {
    super(props);
    this.descriptors = [
      "Software Engineer",
      "Data Engineer",
      "Rocket League Afficianado",
      "Ultimate Frisbee God",
      "Speed Demon in the Rink",
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
        <div className="nav-bar">
          <h1 className="nav-bar-tab">Cool Guy</h1>
        </div>
        <div className="main-content">
          <h1 className="headshot-text">Aidan Tokarski</h1>
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
