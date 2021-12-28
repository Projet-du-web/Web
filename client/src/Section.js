import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import AnomalieForm from './Components/AnomalieForm';




function Section() {
  return (
    <Routes>
     <Route path="/" element={<Dashboard />} /> 
     <Route path="/Dashboard" element={<Dashboard />} />
     <Route path="/Authentification" element={<Login />} />
     <Route path="/Anomalie" element={<AnomalieForm />} />
     <Route path="/Register" element={<Register />} />
  </Routes>
     
  );
}

export default Section;
