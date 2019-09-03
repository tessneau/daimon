import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories, setCurrentCategory } from '../actions/categoryActions';
import '../style/Community.scss';
import PostsContainer from './PostsContainer';
import PostForm from '../components/PostForm';

class Community extends Component {

  state = {
    categoryID: 14,
    show: false
  }

  componentDidMount() {
    this.props.getCategories()
  }

  handleFormPop = () => {
    this.setState({show: !this.state.show})
  }

  generateCategoriesSelect = () => {
    if (this.props.categories) {
      return this.props.categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
    }}

  findCurrentCategory = () => {
    const currentCategory = this.props.category
    return (
      <>
      <div className="category-info">
      <h1 className="name">{currentCategory.name}</h1>
      <h3>{currentCategory.description}</h3>
      </div>
      <PostsContainer />
      </>
      )
  }

  handleChange = (e) => {
    let category
    this.setState({categoryID: +e.target.value}, () => {
      category = this.props.categories.find(category => category.id === this.state.categoryID)
      this.props.setCategory(category)
      })
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
      <button className="btn form-pop" onClick={this.handleFormPop}>new post</button>
      {this.state.show ? <PostForm category_id={this.state.categoryID} handleFormPop={this.handleFormPop}/> : null}
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
    categories: state.categories,
    category: state.currentCategory,
    userPosts: state.currentUser.posts
  }
}

const mapDispatchToProps = {
  getCategories: getCategories,
  setCategory: setCurrentCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Community)
