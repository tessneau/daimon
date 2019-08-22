import React, { Component } from 'react';
import {connect} from 'react-redux'
// import { getCurrentCategoryPosts } from '../actions/categoryActions';
import Post from './Post';
import '../style/PostsContainer.scss'

class PostsContainer extends Component {

  generateCategoryPosts = () => {
    if (this.props.category && this.props.pinned_posts) {
      return this.props.category.posts.map(post => {
          if (this.props.pinned_posts.find(pinned_post => post.id === pinned_post.id))
          {return <Post key={post.id} {...post} pinned={true} />}
          else
          {return <Post key={post.id} {...post} pinned={false} />}
          })
    } else {
      return <h1>Loading the category...</h1>
    }
  }

  render() {
    return (
      <div className="posts-container">
      {this.generateCategoryPosts()}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    category: state.currentCategory,
    pinned_posts: state.currentUser.pinned_posts,
  }
}

export default connect(mapStateToProps)(PostsContainer)
