import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = (props) => {
  const initialValues = {
    name: '',
    email: ''
  }

  const [contact, setContact] = useState(initialValues)
  
  const navigate = useNavigate()
  
  const add = (e) => {
    e.preventDefault()
    if (contact.name === '' || contact.email === '') {
      alert('All fields are required!')
      return
    }
    props.addContactHandler(contact)
    setContact(initialValues)
    navigate('/')
  }

  const handleNameChange = (e) => {
    setContact(contact => {
      return {...contact, name: e.target.value}
    })
  }

  const handleEmailChange = (e) => {
    setContact(contact => {
      return {...contact, email: e.target.value}
    })
  }

  return (
    <div className="addContact">
      <h2>Add Contact</h2>
      <form onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Name"
            value={contact.name}
            onChange={handleNameChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input 
            type="text"
            name="email" 
            placeholder="Email"
            value={contact.email}
            onChange={handleEmailChange}
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </div>
  )
}

export default AddContact;

