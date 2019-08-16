import React, { Component } from 'react';
import PinnedPost from './PinnedPost';
// import Post from './Post'

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

export default PinnedPostsContainer;
