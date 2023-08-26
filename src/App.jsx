import React from "react";
import "./App.modules.css";
import Navbar from "./Components/Navbar/Navbar";
import MainContent from "./Components/MainContent/MainContent";

export default function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  );
}
