import React from 'react'
import { useLocation} from 'react-router-dom'
import './Formdata.css';

const Formdata = () => {
    const data = useLocation().state.submittedData;
  return (
    <div className='container'>
      <h1>Form Data </h1>
      <p>First Name - {data.firstName}</p>
      <p>Last Name - {data.lastName}</p>
      <p> Email - {data.email}</p>
      <p>Gender - {data.gender}</p>
    </div>
  )
}

export default Formdata
