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
        <Route path="MyWebsite/Home" element={<Home />} />
        <Route path="MyWebsite/" element={<Home />} />
        <Route path="MyWebsite/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
