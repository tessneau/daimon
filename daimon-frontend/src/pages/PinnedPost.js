import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pinPost, branchPost } from '../actions/postActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import '../style/PinnedPost.scss';

class PinnedPost extends Component {

  componentDidMount() {
    if (this.props.is_branched_by.includes(this.props.user)) {
      this.setState({branched: !this.state.branched})
    }
  }

  state = {
    pinned: true,
    branched: false,
    branch_count: this.props.branch_count
  }

  handlePinClick = () => {
    this.props.pinPost(this.props.id)
    this.setState({pinned: !this.state.pinned})
  }

  handleBranchClick = () => {
    this.props.branchPost(this.props.id)
    const counter = !this.state.branched ? 1 : -1
    this.setState({
      branched: !this.state.branched,
      branch_count: this.state.branch_count + counter
      })
  }

  render() {
    const favicon = <FontAwesomeIcon icon={faPagelines} />
    const faviconX = <FontAwesomeIcon icon={faTimes} />
    const faviconClip = <FontAwesomeIcon icon={faPaperclip} />
    return (
      <div className="pinned-post-item">
        <p className="title">{this.props.title}</p>
        <p className="content">{this.props.content}</p>
        <div className="footer">
          <div className="branch-container">
            <p>
            <button className="branch-btn" onClick={this.handleBranchClick}>{this.state.branched ? faviconX : favicon} {this.state.branch_count}</button>
            </p>
          </div>
          <div className="pin-container">
            <button className="pin-btn" onClick={this.handlePinClick}>{this.state.pinned ? faviconX : faviconClip}</button>
          </div>
      </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    user: state.currentUser.id
  }
}

const mapDispatchToProps = {
  branchPost: branchPost,
  pinPost: pinPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(PinnedPost)
