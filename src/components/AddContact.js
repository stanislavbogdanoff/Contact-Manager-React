import React from "react";

class AddContact extends React.Component {
  state = {
    name: '',
    email: ''
  }
  
  add = (e) => {
    e.preventDefault()
    const navigate = useNavigate()
    if (this.state.name === '' || this.state.email === '') {
      alert('All fields are required!')
      return
    }
    this.props.addContactHandler(this.state)
    this.setState({
      name: '',
      email: ''
    })
  }

  render() {
    return (
      <div className="addContact">
        <h2>Add Contact</h2>
        <form onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input 
              type="text"
              name="email" 
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="btn">Add</button>
        </form>
      </div>
    )
  }
}

export default AddContact;

