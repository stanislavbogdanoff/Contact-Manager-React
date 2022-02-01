import React from "react";
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom';

const ContactList = (props) => {
  const deleteConactHandler = (id) => {
    props.getContactId(id)
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} key={contact.id} clickHandler={deleteConactHandler}/>
    )
  })

  return (
    <div className="contact-list">
      <div className="list-heading">
          <h2 id="list-heading">Contact List</h2>
          <Link to="/add">
            <button className="btn">Add Contact</button>
          </Link>
        </div>
      {renderContactList}
    </div>
    )
}

export default ContactList;
