import React from "react";

const ContactCard = (props) => {
  const { id, name, email } = props.contact

  return (
    <div className="contact-item">
      <div className="contact-content">
        <h3>{name}</h3>
        <p>{email}</p>
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