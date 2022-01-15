import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainPage } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
      </Router>
    </div>
  );
}

export default App;
