import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Login from './Login'; 
import Home from './Home'; 


function App() {
  return (
    <div>
    
    <Router>
    
      <Routes>
        <Route path="/"  element={<RegistrationForm/>} /> 

         <Route path="/Login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
