import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import api from "../api/contacts";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactInfo from './ContactInfo'
import ContactDelete from "./ContactDelete";

function App() {
  //const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])

  const retrieveContacts = async () => {
    const response = await api.get("/contacts")
    return response.data
  }

  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact
    }
    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data])
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    });

    setContacts(newContactList)
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts()
      if (allContacts) setContacts(allContacts)
    }
    getAllContacts()
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts)
  }, [])

  useEffect(() => {

    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>} />
          <Route path="/" element={<ContactList contacts={contacts} />} />
          <Route path="/contact/:id" element={<ContactInfo />} />
          <Route path="/contact/delete/:id" element={<ContactDelete getContactId={removeContactHandler}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;