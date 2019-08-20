import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pinPost, branchPost } from '../actions/postActions';
import '../style/Post.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faPaperclip } from '@fortawesome/free-solid-svg-icons';

class Post extends Component {

  componentDidMount() {
    if (this.props.is_branched_by.includes(this.props.user)) {
      this.setState({branched: !this.state.branched})
    }
  }

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
    this.setState({branched: !this.state.branched})
  }


  render() {
    const favicon = <FontAwesomeIcon icon={faPagelines} />
    const faviconX = <FontAwesomeIcon icon={faTimes} />
    const faviconClip = <FontAwesomeIcon icon={faPaperclip} />
    return (
      <div className="post-item">
        <p className="title">{this.props.title}</p>
        <p className="content">{this.props.content}</p>
        <div className="footer">
          <div className="branch-container">
            <p>
            <button className="branch-btn" onClick={this.handleBranchClick}>{this.state.branched ? faviconX : favicon }  {this.props.branch_count}</button>
            </p>
          </div>
          <div className="pin-container">
            <button className="pin-btn" onClick={this.handlePinClick}>{this.state.pinned ? faviconX : faviconClip}</button>
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
    user: state.currentUser.id,
  }
}

const mapDispatchToProps = {
  branchPost: branchPost,
  pinPost: pinPost,
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
