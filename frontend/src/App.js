import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "./components";
import { Webplayer } from "./components/Webplayer/index";

function App() {
  // fetch backend data
  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/player" element={<Webplayer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
