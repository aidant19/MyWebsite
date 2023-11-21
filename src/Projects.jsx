import "./index.css";
import "./Projects.css";
import React from "react";
import albstatDB from "./assets/albstat_db.PNG";
import albstatData from "./assets/albstat_data.PNG";
import rlreplayCode from "./assets/rlreplay_code.PNG";
import rlreplayAnalysis from "./assets/rlreplay_analysis.PNG";
import dravCode from "./assets/dravmmr_code.PNG";
import dravOutput from "./assets/dravmmr_output.PNG";
import rsctrackerDB from "./assets/rsctracker_db.png";
import rsctrackerAnalysis from "./assets/rsctracker_analysis.PNG";
import whackCode from "./assets/whack_code.PNG";
import whackDemo from "./assets/whack_demo.PNG";
import replayshotCode from "./assets/replayshot_code.PNG";
import replayshotIG from "./assets/replayshot_ingame.PNG";
import swncovCode from "./assets/swncov_code.PNG";
import swncovGUI from "./assets/swncov_gui.PNG";
import rlgymCode from "./assets/rlgym_code.PNG";
import rlgymCode2 from "./assets/rlgym_code2.PNG";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p1>{this.props.text}</p1>
        <div className="img-block">
          <div
            className="img-container"
            onClick={() => this.props.onImgClick(this.props.img1)}
          >
            <img className="img-withfade" src={this.props.img1} />
            <div className="img-overlay">
              <div className="img-text">{this.props.imgtext1}</div>
            </div>
          </div>
          <div
            className="img-container"
            onClick={() => this.props.onImgClick(this.props.img2)}
          >
            <img className="img-withfade" src={this.props.img2} />
            <div className="img-overlay">
              <div className="img-text">{this.props.imgtext2}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class EnlargedImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.visible)
      return (
        <div className="enlarged-popup">
          <div className="enlarged-background" />   
          <img src={this.props.imgSrc} className="enlarged-image" />
        </div>
      );
  }
}

class ProjectsWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgEnlarged: false,
      imgSrc: "",
    };
  }

  onImgClick(newSrc) {
    this.setState({ imgEnlarged: true });
    this.setState({ imgSrc: newSrc });
  }

  onDivClick() {
    if (this.state.imgEnlarged) this.setState({ imgEnlarged: false });
  }

  render() {
    return (
      <div onClick={this.onDivClick.bind(this)}>
        <EnlargedImage
          imgSrc={this.state.imgSrc}
          visible={this.state.imgEnlarged}
        />
        <Project
          title="Albstat (June 2020)"
          text="First-of-its-kind database and supporting Java software for gameplay analysis of Albion Online’s “Crystal League” matches. Data extracted from the Albion Online public API, transformed, and loaded with JDBC into a SQL database (originally MySQL, later PostgreSQL)."
          img1={albstatDB}
          imgtext1="Albstat database"
          img2={albstatData}
          imgtext2="Basic analysis use-case"
          onImgClick={this.onImgClick.bind(this)}
        />
        <Project
          title="RLReplay (August 2020)"
          text="Java-driven tool used for scouting in competitive Rocket League environments. Capable of collecting game replays, player data, and league information from online sources. Game replays are parsed, known player IDs are matched to individual players, and current player organization affiliations are appended for producing a formatted match tabulation file which can be used for analysis of player performance across many matches compared to their peers."
          img1={rlreplayCode}
          imgtext1="Data collection code"
          img2={rlreplayAnalysis}
          imgtext2="Scouting analysis"
          onImgClick={this.onImgClick.bind(this)}
        />
        <Project
          title="dravMMR (August 2020)"
          text="Originally an emergency rewrite of a data collection tool used in Rocket League scouting for querying player data, later adopted by RSC league administration for player skill evaluation and tier placement. Written in Python, overhauling freshly-broken, synchronous architecture to support new protocols of data source as well as pull and collate data asynchronously."
          img1={dravCode}
          imgtext1="Data collection code"
          img2={dravOutput}
          imgtext2="Formatted output with player data"
          onImgClick={this.onImgClick.bind(this)}
        />
        <Project
          title="RSCTracker (September 2020)"
          text="MySQL Database and supporting Java program for performing statistical analysis across the entire RSC League. Tracks player data and statistics, combining work on RLReplay and dravMMR with expanded functionality in order to enable the development, testing, and application of novel player evaluation algorithms."
          img1={rsctrackerDB}
          imgtext1="RSCTracker database"
          img2={rsctrackerAnalysis}
          imgtext2="Correlation analysis of player ELOs and proprietary evaluation metric"
          onImgClick={this.onImgClick.bind(this)}
        />
        <Project
          title="Small-World-COVID (November 2020)"
          text="Java simulation of real-world network dynamics based on hyperbolic graph theory, utilized in modeling the spread of COVID-19. Developed at the 2020 Wellesley College Hackathon (WHACK 2020), and served as the basis for future research."
          img1={whackCode}
          imgtext1="Hyperbolic graph generation code"
          img2={whackDemo}
          imgtext2="Visualization of the network"
          onImgClick={this.onImgClick.bind(this)}
        />
        <Project
          title="ReplayShot (November 2020)"
          text="A modification for Rocket League written in C++ and injected via DLL which allows for players to train in scenarios taken from a previously-played match."
          img1={replayshotCode}
          imgtext1="Car manipulation code"
          img2={replayshotIG}
          imgtext2="Scenario played in-game"
          onImgClick={this.onImgClick.bind(this)}
        />
        <Project
          title="SWN-COV (January 2021)"
          text="Research project funded through UMass Dartmouth expanding upon Small-World-COVID simulator. Written in Python, application is designed to iterate on previous simulation work for evaluating efficiency of campus testing protocols."
          img1={swncovCode}
          imgtext1="Simulation functions"
          img2={swncovGUI}
          imgtext2="GUI for parameter tuning, simulation, and graphing"
          onImgClick={this.onImgClick.bind(this)}
        />
        <Project
          title="RLGym State-Setting (July 2021)"
          text="Developed, integrated, and documented the state setting module for the reinforcement learning framework “RLGym”, used for reinforcement learning in Rocket League. Module enables developers to generate and simulate “drills” for agents. Implemented in both the Python API and back-end C++ injectable DLL."
          img1={rlgymCode}
          imgtext1="Python API manipulation framework"
          img2={rlgymCode2}
          imgtext2="C++ DLL logic"
          onImgClick={this.onImgClick.bind(this)}
        />
      </div>
    );
  }
}

export default ProjectsWrapper;
