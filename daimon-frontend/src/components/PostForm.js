import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { createPost } from '../actions/userActions';
import '../style/PostForm.scss'

class HabitModal extends Component {

  state = {
    title: '',
    content: '',
    category_id: this.props.category_id
  }

  handleClick = () => {
    this.props.handleFormPop()
  }

  handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
      console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // this.props.createPost(this.state)
    this.props.handleFormPop()
  }

  render() {
    console.log(this.props)
    return (
        <div className="post-container">
          <h1>new post:</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="title input"><label> title <input type="text" name="title" value={this.state.name} onChange={this.handleChange} /> </label></div>
              <div className="content input"><label> content <textarea name="content" type="text" onChange={this.handleChange} /> </label> </div>

              <input className="submit-btn" type="submit" value="Submit"/>
            </form>
        </div>
    );
  }

}
const mapStateToProps = state => {
  return {
    posts: state.currentUser.posts,
    category: state.currentCategory
  }
}

const mapDispatchToProps = {
  // createHabit: createHabit,
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitModal)
