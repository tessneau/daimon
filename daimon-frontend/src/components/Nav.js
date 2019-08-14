import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import '../style/Nav.scss'
import { connect } from 'react-redux'
import { getCurrentUser, logOut } from '../actions/userActions'

class Nav extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
    this.props.getCurrentUser(localStorage.getItem("token"))
  }}

  onLogout = () => {
    this.props.logOut()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="nav-bar-container">
        {
          this.props.currentUser.id ? (
            <div className="nav-link-container">
              <NavLink className="nav-link" activeClassName="selected" to="/daimon/profile">Profile</NavLink>
              <NavLink className="nav-link" activeClassName="selected" to="/daimon/habits">Habits</NavLink>
              <NavLink className="nav-link" activeClassName="selected" to="/daimon/community">Community</NavLink>
              <NavLink className="nav-link" activeClassName="selected" onClick={this.onLogout} exact to='/'>Logout</NavLink>
            </div>
          ) : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = {
  getCurrentUser: getCurrentUser,
  logOut: logOut
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))
