import React, { Component } from 'react';
import PinnedPost from './PinnedPost';
import { connect } from 'react-redux';
import '../style/PinnedPostContainer.scss'

class PinnedPostsContainer extends Component {

  generatePinnedPosts = () => {
    return this.props.pinned_posts.map(post => <PinnedPost key={post.id} {...post}/>)
  }

  render() {
    return (
      <div className="pinned-posts-container">
      <h3>Pinned Posts</h3>
      {this.generatePinnedPosts()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pinned_posts: state.currentUser.pinned_posts
  }
}

export default connect(mapStateToProps)(PinnedPostsContainer)
