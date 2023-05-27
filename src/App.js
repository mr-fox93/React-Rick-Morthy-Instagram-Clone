import React from "react";
import "./App.css";
//import Authentication from "./authentication/Authentication";
import LeftPanel from "./LeftPanel"; // Dodany komponent
import { Route, Routes } from "react-router-dom";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Homepage from "./Homepage";
import { LoginProvider } from "./context/LoginContext";

function App() {
  return (
    <LoginProvider>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </LoginProvider>
  );
}

export default App;
