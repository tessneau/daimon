import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/userActions';
import '../style/Login.scss';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  componentDidMount() {
    if (localStorage.token) {
      this.props.history.push("/daimon/habits")
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const loginInformation = this.state
    this.props.logIn(loginInformation)
      .then(()=> {
        this.props.history.push("/daimon/habits")
      })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = () => {
    this.props.history.push("/signup")
  }

  render() {
    const {username, password} = this.state
    return (
      <div className="form-container login">
      <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="username"><b>Username</b>
      </label>
        <input type="text" value={username} onChange={this.handleChange} name="username" required/>
         <label htmlFor="password"><b>Password</b></label>
        <input type="password" value={password} onChange={this.handleChange} name="password" required/>
        <input className="form-btn login" type="submit" value="Enter" />
      </form>
      <a className="anch login" href='./daimon/signup' onClick={this.handleClick}>New Here?</a>
      </div>
    );
  }
}

const mapDispatchToProps = {
    logIn: logIn
}

export default connect(null, mapDispatchToProps)(Login)
