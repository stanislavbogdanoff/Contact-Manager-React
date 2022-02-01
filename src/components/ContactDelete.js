import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const ContactDelete = (props) => {
  const location = useLocation()
  const { id, name } = location.state.contact

  const navigate = useNavigate()

  const deleteConactHandler = (id) => {
    props.getContactId(id)
    navigate('/')
  }

  return (
    <div className="contact-delete">
      <h2>
        Are you sure you want to delete <p>{name}</p> from Contacts?
      </h2>
      <div className="delete-btns">
        <button onClick={() => deleteConactHandler(id)} className="btn" id="btn-red">
          Yes
        </button>
        <Link to="/"  className="link">
          <button className="btn">
            Cancel
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ContactDelete;