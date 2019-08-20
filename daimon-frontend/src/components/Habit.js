import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import Moment from 'react-moment';
import 'moment-timezone';
import { connect } from 'react-redux';
import { deleteHabit, updateHabitProgress } from '../actions/habitActions'
import '../style/Habit.scss';

class Habit extends Component {

  state = {
    progress_count : this.props.progress_count,
  }

  handleClick = () => {
    this.props.updateHabitProgress(this.props.id)
    this.setState({progress_count: this.state.progress_count + 1})
  }

  handleDelete = () => {
    this.props.deleteHabit(this.props.id)
  }

  render() {
    return (
      <div className="habit-and-progress">
      <button className="delete-habit" onClick={this.handleDelete}>x</button>
      <div className="habit-card" onClick={this.handleClick}>
      <h3>{this.props.name}</h3>
      <h3>TYPE: {this.props.positive ? 'DO' : "DON'T"}</h3>
      <p>frequency: {this.props.maxFrequency}</p>
      <p>progress: {this.props.progress_count}</p>

      <p>first day:
      <Moment fromNow>{this.props.firstDay}</Moment>
      </p>
      </div>
        <ProgressBar frequency={this.props.maxFrequency} progress_count={this.props.progress_count}/>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    habits: state.currentUser.habits
  }
}

const mapDispatchToProps = dispatch => ({
  updateHabitProgress: (id) => dispatch(updateHabitProgress(id)),
  deleteHabit: (id) => dispatch(deleteHabit(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Habit)
