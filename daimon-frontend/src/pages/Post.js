import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pinPost } from '../actions/postActions';
import '../style/Post.scss';

class Post extends Component {

  state = {
    pinned: false,
    branched: false
  }


  render() {

    return (
      <div className="post-item">
        <p className="title">{this.props.title}</p>
        <p className="content">{this.props.content}</p>
        <div className="footer">
          <div className="branch-container">
            <p>Branches: {this.props.branch_count} <br></br>
            <button>{this.state.branched ? 'unbranch' : 'add branch'}</button>
            </p>
          </div>
          <div className="pin-container">
            <button>{this.state.pinned ? 'already pinned' : 'pin this'}</button>
          </div>
          <div className="author-container">
            <h4>Author</h4>
            <p>{this.props.author.username}</p>
            <img className="avatar" src={this.props.author.avatar_img} alt="author" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Post)
