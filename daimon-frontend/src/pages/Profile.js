import React, { Component } from 'react';
import { connect } from 'react-redux';
import PinnedPostsContainer from './PinnedPostsContainer';
import '../style/Profile.scss';

class Profile extends Component {

  render() {
    return (
      <div className="profile-container">
      <h1>PROFILE</h1>
      <h3>Username: {this.props.username}</h3>
      <img src={this.props.avatar_img} alt="avatar"/>

      <PinnedPostsContainer />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    username: state.currentUser.username,
    avatar_img: state.currentUser.avatar_img,
  }
}

export default connect(mapStateToProps)(Profile)
