import React, { useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
   
    
    navigate('/Formdata', {state:{ submittedData : formData}});
  };

  

  return (
    <div>
      <h1 className="form-title">Login Page</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            required 
          />
        </div>
        <input
          type="radio"
           id="male"
           name="gender"
           value="male"
           checked={formData.gender === "male"}
           onChange={(e) => handleChange(e)} 
           required />
          <label htmlFor="male">Male</label>

          <input
          type="radio"
           id="male"
           name="gender"
           value="male"
           checked={formData.gender === "male"}
           onChange={(e) => handleChange(e)} 
            required />
          <label htmlFor="male">FeMale</label>



        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required 
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
