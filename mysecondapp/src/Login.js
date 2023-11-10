import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Define the handleChange function to update the state when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Define the handleSubmit function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the username and password match the expected values
    if (formData.username === 'Gurunath' && formData.password === 'Guru@1111' && formData.email === 'gurunath.bugga@gmail.com') {
      
      window.location.href = '/Home'; // Change to your actual home page URL
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="body1">
    <div className="login-form-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username" className="login-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="login-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="login-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="login-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="login-input"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
