import React, { useState } from 'react';
import './Register.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate firstName
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }

    // Validate lastName
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    // Validate password
    const validatePassword = (password) => {
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

      return null;
    };

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

  const handleRegister = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Registration successful!', formData);
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
    <div className="register">
      <form onSubmit={handleRegister} className="register__form">
        <h1 className="register__title">Register</h1>

        <div className="register__content">
          {/* First Name */}
          <div className="register__box">
            <i className="bx bx-user"></i>
            <div className="register__box-input">
              <input
                type="text"
                required
                className="register__input"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div className="register__box">
            <i className="bx bx-user"></i>
            <div className="register__box-input">
              <input
                type="text"
                required
                className="register__input"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div className="register__box">
            <i className="bx bx-mail-send"></i>
            <div className="register__box-input">
              <input
                type="email"
                required
                className="register__input"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="register__box">
            <i className="ri-lock-2-line register__icon"></i>
            <div className="register__box-input">
              <input
                type="password"
                required
                className="register__input"
                id="register-pass"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <i className="ri-eye-off-line register__eye"></i>
            </div>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="register__box">
            <i className="ri-lock-2-line register__icon"></i>
            <div className="register__box-input">
              <input
                type="password"
                required
                className="register__input"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <i className="ri-eye-off-line register__eye"></i>
            </div>
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        <button type="submit" className="register__button">
          Register
        </button>

        <p className="register__login">
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
