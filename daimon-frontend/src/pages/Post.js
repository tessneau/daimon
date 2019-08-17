import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pinPost, branchPost } from '../actions/postActions';
import '../style/Post.scss';

class Post extends Component {

  state = {
    pinned: this.props.pinned,
    branched: false
  }

  handlePinClick = () => {
    this.props.pinPost(this.props.id)
    this.setState({pinned: !this.state.pinned})
  }

  handleBranchClick = () => {
    this.props.branchPost(this.props.id)
  }


  render() {
    return (
      <div className="post-item">
        <p className="title">{this.props.title}</p>
        <p className="content">{this.props.content}</p>
        <div className="footer">
          <div className="branch-container">
            <p>Branches: {this.props.branch_count} <br></br>
            <button className="branch-btn" onClick={this.handleBranchClick}>{this.state.branched ? 'unbranch' : 'branch'}</button>
            </p>
          </div>
          <div className="pin-container">
            <button className="pin-btn" onClick={this.handlePinClick}>{this.state.pinned ? 'unpin' : 'pin'}</button>
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
  branchPost: branchPost,
  pinPost: pinPost,
}

export default connect(null, mapDispatchToProps)(Post)
