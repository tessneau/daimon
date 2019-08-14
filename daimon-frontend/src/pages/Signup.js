import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions/userActions';
import '../style/Login.scss';

class Signup extends Component {
  state = {
    username: '',
    password: ''
  }

  componentDidMount() {
    if (localStorage.token) {
      this.props.history.push("/profile")
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const signUpInformation = this.state
    this.props.signUp(signUpInformation)
      .then(()=> {
        this.props.history.push("/profile")
      })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = () => {
    this.props.history.push("/login")
  }

  render() {
    return (
      <div className="form-container signup">
      <h1>Signup</h1>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="username"><b>Username</b>
      </label>
        <input type="text" value={this.state.username} onChange={this.handleChange} name="username" />
         <label htmlFor="password"><b>Password</b></label>
        <input type="text" value={this.state.password} onChange={this.handleChange} name="password" />
        <input className="form-btn signup" type="submit" value="Enter" />
      </form>
      <a className="anch signup" href='./daimon/login' onClick={this.handleClick}>Been Here Before?</a>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     user: state.currentUser
//   }
// }

const mapDispatchToProps = {
    signUp: signUp
}

export default connect(null, mapDispatchToProps)(Signup)
