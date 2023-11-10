import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="body">

    
    <div className="registration-form-container">
      <h1>Registration</h1>
      <form>
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
        <Link
          to={{
            pathname: '/Login',
            state: {
              formData: formData,
            },
          }}
        >
          <button className="register-button">Register</button>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default Register;
