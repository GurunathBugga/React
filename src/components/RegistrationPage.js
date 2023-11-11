import React, { useState } from 'react';
import './RegistrationPage.css'; // Import the CSS file

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate username
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    const validatePassword = (password) => {
      // Minimum length of 6 characters
      if (password.length < 6) {
        return 'Password must be at least 6 characters';
      }
    
      // At least one lowercase letter
      if (!/[a-z]/.test(password)) {
        return 'Password must include at least one lowercase letter';
      }
    
      // At least one uppercase letter
      if (!/[A-Z]/.test(password)) {
        return 'Password must include at least one uppercase letter';
      }
    
      // At least one digit
      if (!/\d/.test(password)) {
        return 'Password must include at least one digit';
      }
    
      // At least one special character
      if (!/[@$!%*?&]/.test(password)) {
        return 'Password must include at least one special character';
      }
    
      // If all conditions pass, return null (indicating no error)
      return null;
    };

    // Validate password
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      newErrors.password = passwordError;
      isValid = false;
    }

    // Validate confirmPassword
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Registration successful!', formData);
      // You can send the form data to the server or perform other actions as needed
    } else {
      console.log('Form validation failed');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="body">
    <div className="registration-container">
      <h2 className='heading2'>R<br/> E<br/>G<br/>I<br/>S<br/>T<br/>R<br/>A<br/>T<br/>I<br/>O<br/>N</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? 'error' : ''}
          />
          {errors.confirmPassword && (
            <span className="error-message">{errors.confirmPassword}</span>
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );

};

export default RegistrationPage;
