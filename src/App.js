import React from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import RegistrationPage from './components/RegistrationPage';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/RegistrationPage" element={<RegistrationPage/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
