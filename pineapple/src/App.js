import React from "react";
import "./App.css";
import Nav from "./Pages/Nav";
import About from "./Pages/About";
import Facts from "./Pages/Facts";
import Trending from "./Pages/Trending";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/facts" element={< Facts />} />
          <Route path="/trending" element={< Trending />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1> Home Page </h1>
  </div>
);

export default App;
