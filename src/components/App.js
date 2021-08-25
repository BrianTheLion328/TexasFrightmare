import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import Welcome from "./Welcome";
import Bio from "./Bio";
import "./Style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [celebrities, setCelebrities] = useState([]);
  const [celeb, setCeleb] = useState([]);
  const [oneCeleb, setOneCeleb] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route exact path="/celebrities">
            <Body
            celebrities={celebrities}
            setCelebrities={setCelebrities} />
            </Route>
            <Route exact path="/celebrities/:id">
            <Bio
            oneCeleb={oneCeleb}
            setOneCeleb={setOneCeleb} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
