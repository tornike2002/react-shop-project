import React from "react";
import NoPage from "./components/ErrorPage/NoPage";
import Home from "./components/pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<noPage />} />
      </Routes>
    </div>
  );
}

export default App;
