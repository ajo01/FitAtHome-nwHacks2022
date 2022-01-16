import "./App.css";
import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import { MainPage, ReportPage } from "./components";
import { ExercisePage } from "./components";
import { Webplayer } from "./components/Webplayer/index";

function App() {
  const [cnt, setCnt] = useState(0);
  const [postureMsg, setPostureMessage] = useState("");
  const [videoFeed, setVideoFeed] = useState(null);

  // fetch backend data
  // useEffect(() => {
  //   fetch("/count")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCnt(data);
  //     });
  // });

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route
            path="/exercise"
            element={<ExercisePage cnt={cnt} postureMsg={postureMsg} />}
          />
          <Route path="/player" element={<Webplayer />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
