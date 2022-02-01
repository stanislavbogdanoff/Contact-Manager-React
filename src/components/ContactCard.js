import React from "react";
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
  const { id, name, email } = props.contact

  return (
    <div className="contact-item">
      <div className="contact-content">
        <Link to={`/contact/${id}`} state={{contact: props.contact}} className="link">
          <h3>{name}</h3>
          <p>{email}</p>
        </Link>
      </div>
      <Link to={`/contact/delete/${id}`} state={{contact: props.contact}} className="link">
        <i 
          className="fa fa-trash fa-2x" 
          aria-hidden="true"
        >
        </i>
      </Link>
    </div>
  )
}

export default ContactCard;