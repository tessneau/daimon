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
    const { habit } = this.props
    return (
      <div className="habit-and-progress">
      <button className="delete-habit" onClick={this.handleDelete}>x</button>
      <div className="habit-card" onClick={this.handleClick}>
      <h3>{habit.name}</h3>
      <h3>TYPE: {habit.positive ? 'DO' : "DON'T"}</h3>
      <p>daily goal: {habit.maxFrequency}</p>
      <p>progress: {this.state.progress_count}</p>

      <p>first day:
      <Moment fromNow>{habit.firstDay}</Moment>
      </p>
      </div>
        <ProgressBar frequency={habit.maxFrequency} progress_count={this.state.progress_count}/>
      </div>
    );
  }

}

const mapDispatchToProps = {
  updateHabitProgress: updateHabitProgress,
  deleteHabit: deleteHabit,
}

export default connect(null, mapDispatchToProps)(Habit)
