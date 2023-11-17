import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory and useNavigate from react-router-dom
import axios from 'axios'; // Import axios for HTTP requests
import './Login.css'; // Import the CSS file

const LoginPage = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // const history = useHistory(); // Initialize useHistory
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createLoginData();
  };

  const createLoginData = async () => {
    setSubmitting(true);
    try {
      const response = await axios.post(
        'http://localhost:3000/login_data/add',
        formData
      );

      if (response.data.success) {
        // If login is successful, redirect to the home page
        // history.push('/home');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgotPassword = () => {
    // Placeholder for the ForgotPassword functionality
    console.log('Forgot Password clicked');
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login__form">
        <h1 className="login__title">Login</h1>

        <div className="login__content">
          <div className="login__box">
            <i className="bx bx-lock-alt"></i>

            <div className="login__box-input">
              <input
                type="text"
                name="userName"
                required
                className="login__input"
                placeholder="UserName"
                value={formData.userName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="login__box">
            <i className="ri-lock-2-line login__icon"></i>

            <div className="login__box-input">
              <input
                type="password"
                name="password"
                required
                className="login__input"
                id="login-pass"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <i className="ri-eye-off-line login__eye"></i>
            </div>
          </div>
        </div>

        <div className="login__check">
          <div className="login__check-group">
            <input type="checkbox" className="login__check-input" />
            <label htmlFor="" className="login__check-label">
              Remember me
            </label>
          </div>

          <a href="ForgotPassword" className="login__forgot" onClick={handleForgotPassword}>
            Forgot Password?
          </a>
        </div>

        {error && <div className="login__error">{error}</div>}

        <button type="submit" className="login__button" disabled={submitting}>
          {submitting ? 'Logging in...' : 'Login'}
        </button>

        <p className="login__register">
          Don't have an account? <a href="Register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
