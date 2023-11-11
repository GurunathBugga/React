import React from "react";
import "./Login.css";
// import logo1 from './images/logo1.avif'


const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <header>
          <h1 className="keyheding">Hi</h1>
        </header>
         {/* <div className="logo2">
            <img src={logo1} alt="" />
         </div> */}
        <form action="/login" method="post">
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />

          <div className="login-actions">
            <button type="submit">GET STARTED</button>
            <input type="checkbox" name="keep-logged-in" id="keep-logged-in" />
            <label htmlFor="keep-logged-in">Keep Logged In</label>
            
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </form>

        <footer>
          <a href="/register">CREATE ACCOUNT</a>
          <a href="/need-help">NEED HELP?</a>
          <a href="/about-us">About Us</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms Of Use</a>
          <p>© 2019 Key. All Rights Reserved | Design By w3layouts</p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
