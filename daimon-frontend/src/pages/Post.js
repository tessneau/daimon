import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pinPost } from '../actions/postActions';
import '../style/Post.scss';

class Post extends Component {

  state = {
    pinned: this.props.pinned,
    branched: false
  }

  handleClick = () => {
    this.props.pinPost(this.props.id)
    this.setState({pinned: !this.state.pinned})
  }


  render() {
    return (
      <div className="post-item">
        <p className="title">{this.props.title}</p>
        <p className="content">{this.props.content}</p>
        <div className="footer">
          <div className="branch-container">
            <p>Branches: {this.props.branch_count} <br></br>
            <button className="branch-btn">{this.state.branched ? 'unbranch' : 'branch'}</button>
            </p>
          </div>
          <div className="pin-container">
            <button className="pin-btn" onClick={this.handleClick}>{this.state.pinned ? 'unpin' : 'pin'}</button>
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

const mapDispatchToProps = {
  pinPost: pinPost,
}

export default connect(null, mapDispatchToProps)(Post)
