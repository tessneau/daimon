import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pinPost } from '../actions/postActions';
import '../style/PinnedPost.scss';

class PinnedPost extends Component {

  state = {
    pinned: false,
    branched: false
  }

  render() {
    return (
      <div className="pinned-post-item">
        <p className="title">{this.props.title}</p>
        <p className="content">{this.props.content}</p>
        <div className="footer">
        <div className="branch-container">
          <p>Branches: {this.props.branch_count} <br></br>
          </p>
        </div>
      </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    pinned_posts: state.currentUser.pinned_posts,
  }
}

const mapDispatchToProps = {
  pinPost: pinPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(PinnedPost)
