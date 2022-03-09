import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//Css
import "animate.css";
import "./styles.scss";

//Components
import Home from "./pages/Home";
import { Details } from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/pokemon" />} />
          <Route exact path="/pokemon" element={<Home />} />
          <Route exact path="/pokemon/:name" element={<Details />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
