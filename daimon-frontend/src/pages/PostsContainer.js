import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getCurrentCategoryPosts } from '../actions/categoryActions';
import Post from './Post';
import '../style/PostsContainer.scss'

class PostsContainer extends Component {

  generateCategoryPosts = () => {
    if (this.props.category) {
      // return <p>{this.props.category.name}</p>
      return (
        this.props.category.posts.map(post => <Post key={post.id} {...post} />)
        )
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
    category: state.currentCategory
  }
}

const mapDispatchToProps = {
  getPosts: getCurrentCategoryPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
