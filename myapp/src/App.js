import React from 'react'
// import Navbar from './components/Navbar'
// import BodySection from './components/BodySection';
// import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navigation from './Navigation';
// import AboutUs from './pages/AboutUs';
// import SignUp from './pages/SignUp';
// import Contact from './pages/Contact';
// import Products from './pages/Products';
// import Email from './email';
// import New from './New';
import Form from './Form';
import Formdata from './Formdata';

const App = () => {            
  return (
  
    <div>
      {/* <Navbar /> */}
      <Router>
        {/* <Navigation />  */}
        <Routes>
          {/* <Route path="/" element={<BodySection />} /> */}
          {/* <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/email" element={<Email />} />
          <Route path="/New" element={<New />} /> */}
          <Route path="/Form" element={<Form />} />
          <Route path="/Formdata" element={<Formdata />} />
          
        </Routes>
      </Router>
      
      {/* <Footer /> */}
    </div>
   
  );
}

export default App
