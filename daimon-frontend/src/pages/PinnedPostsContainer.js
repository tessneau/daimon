import React, { Component } from 'react';
import PinnedPost from './PinnedPost';
import { connect } from 'react-redux';
import '../style/PinnedPostContainer.scss'

class PinnedPostsContainer extends Component {

  state = {
    filterValue : '0'
  }

  generatePinnedPosts = () => {
    if (this.props.pinned_posts[0]) {
      return this.props.pinned_posts.map(post => <PinnedPost key={post.id} {...post}/>)
    } else {
      return <h3> You haven't pinned any posts yet </h3>
    }
  }

  generateUserPosts = () => {
    if (this.props.user_posts[0]) {
      return this.props.user_posts.map(post => <PinnedPost key={post.id} {...post}/>)
    } else {
      return <h3> You haven't created any posts yet </h3>
    }
  }

  renderFilter = () => {
    if (this.state.filterValue === '0') {
      return (
        <div className="pinned-posts-container">
      <h3>Pinned Posts</h3>
      {this.generatePinnedPosts()}
      </div>)
    } else {
      return (
        <div className="pinned-posts-container">
      <h3>My Posts</h3>
      {this.generateUserPosts()}
      </div>)
    }
  }

  handleFilter = (e) => {
    this.setState({filterValue: e.target.value})

  }

  render() {
    return (
      <div className="user-posts-container">
        <div className="filter">
          <button className="btn" onClick={this.handleFilter} value='0'>Pinned Posts</button>
          <button className="btn" onClick={this.handleFilter} value='1'>My Posts</button>
        </div>
        {
          this.renderFilter()
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pinned_posts: state.currentUser.pinned_posts,
    user_posts: state.currentUser.posts
  }
}

export default connect(mapStateToProps)(PinnedPostsContainer)
