import headshot from "./assets/headshot_edited.jpg";
import "./Me.css";

function Me() {
  return (
    <div>
        <div className="nav-bar">
            <h1>test</h1>
        </div>
      <div className="main-content">
        <h1 className="headshot-text">Aidan Tokarski</h1>;
        <img src={headshot} className="headshot" />
      </div>
    </div>
  );
}

export default Me;
