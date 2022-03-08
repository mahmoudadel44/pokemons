import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Details } from "./pages/Details";

import "./styles.scss";

//Components
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:name" element={<Details />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
