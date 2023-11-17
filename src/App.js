import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';


const App = () => {
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
      
      </Routes>
      </Router>
    </div>
  )
}

export default App
