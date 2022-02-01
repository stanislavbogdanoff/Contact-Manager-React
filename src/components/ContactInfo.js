import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import user from '../images/user.png'

const ContactInfo = (props) => {
  const location = useLocation()
  const { name, email } = location.state.contact
  return (
    <>
      <div className="contact-info">
        <img src={user} alt="user" />
        <div className="info-content">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
      <Link to='/' className="link">
        <button className="btn center">Back to Contact List</button>
      </Link>
    </>
  )
}

export default ContactInfo;