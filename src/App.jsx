import { Routes, Route} from "react-router-dom";

import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import "./index.css";
import NavBar from "./NavBar.jsx";

const App = () => {
  return (
    <div className="main-body">
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
