import React, { Component } from 'react';
import '../style/PinnedPost.scss'

class PinnedPost extends Component {

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

export default PinnedPost;
