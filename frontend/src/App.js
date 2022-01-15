import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
