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
      <i 
        className="fa fa-trash fa-2x" 
        aria-hidden="true"
        onClick={() => props.clickHandler(id)}
      >
      </i>
    </div>
  )
}

export default ContactCard;