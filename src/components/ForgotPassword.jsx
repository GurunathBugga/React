// ForgotPasswordPage.js
import React, { useState } from 'react';
import './ForgotPassword.css'; 

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();

    // Simulate forgot password logic
    console.log('Forgot password for email:', email);
  };

  return (
    <div className="forgot-password">
      <form onSubmit={handleForgotPassword} className="forgot-password__form">
        <h1 className="forgot-password__title">Forgot Password</h1>

        <div className="forgot-password__content">
          {/* Email */}
          <div className="forgot-password__box">
            <i className="bx bx-mail-send"></i>
            <div className="forgot-password__box-input">
              <input
                type="email"
                required
                className="forgot-password__input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button type="submit" className="forgot-password__button">
          Reset Password
        </button>

        <p className="forgot-password__login">
          Remember your password? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
