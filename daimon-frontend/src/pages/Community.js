import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, getCurrentCategoryPosts } from '../actions/categoryActions';
import '../style/Community.scss';
import PostsContainer from './PostsContainer'

class Community extends Component {

  state = {
    categoryID: 1
  }

  componentDidMount() {
    this.props.getCategories()
    this.props.getPosts(this.state.categoryID)
  }

  generateCategoriesSelect = () => {
    if (this.props.categories) {
      return this.props.categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
    }}

  findCurrentCategory = () => {
    const currentCategory = this.props.categories.find(category => category.id === this.state.categoryID)
    return (
      <div className="category-info">
      <h1 className="name">{currentCategory.name}</h1>
      <h3>{currentCategory.description}</h3>
      </div>
      )
  }

  handleChange = (e) => {
    this.setState({categoryID: +e.target.value},() => this.props.getPosts(this.state.categoryID));
  }

  renderHeader = () => {
    if (this.props.username && this.props.categories[0]) {
      return (
        <>
        <div className="header">
        <label> <p>Categories</p>
          <select className="custom-select" value={this.state.categoryID} onChange={this.handleChange}>
          {this.generateCategoriesSelect()}
          </select>
        </label>
        </div>
      {
        this.props.categories[0] ? this.findCurrentCategory() : null
      }
      <PostsContainer />
      </>
        )
    } else {
      return <h1>Loading...</h1>
    }
  }

  render() {
    return (
      <div className="community-container">
      <h1>COMMUNITY</h1>

      {this.renderHeader()}

      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    username: state.currentUser.username,
    categories: state.categories
  }
}

const mapDispatchToProps = {
  getCategories: getCategories,
  getPosts: getCurrentCategoryPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Community)


// <option value={0} disabled>Choose a Category</option>
