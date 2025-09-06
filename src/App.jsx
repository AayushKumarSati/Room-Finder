import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import OwnerDashboard from "./Pages/OwnerDashboard";
import RoomDetails from "./Pages/RoomDetails";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/owner" element={<OwnerDashboard />} />
        <Route path="/room/:id" element={<RoomDetails />} />
      </Routes>
    </>
  );
};

export default App;
