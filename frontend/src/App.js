import "./App.css";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./components";
import { ExercisePage } from "./components";

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
          <Route
            path="/exercise"
            element={
              <ExercisePage
                videoFeed={videoFeed}
                cnt={cnt}
                postureMsg={postureMsg}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
