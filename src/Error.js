import React from 'react'
import './Css/Error.css'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className="error-container">
      <div className="error-name">
        Error 404..!

      </div>
      <Link to='/'><button className='Error-pagebtn'>Go to Homepage</button></Link>
    </div>
  )
}

export default Error