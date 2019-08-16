import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import { connect } from 'react-redux';
import { deleteHabit } from '../actions/habitActions'
import '../style/Habit.scss';

class Habit extends Component {

  handleClick = () => {
    this.props.deleteHabit(this.props.habit.id)
  }

  render() {
    return (
      <div className="habit-card">
      <button className="delete-habit" onClick={this.handleClick}>x</button>
      <h3>{this.props.habit.name}</h3>
      <h3>TYPE: {this.props.habit.positive ? 'DO' : "DON'T"}</h3>
      <p>frequency: {this.props.habit.maxFrequency}</p>
      <p>first day:
      <Moment fromNow>{this.props.habit.firstDay}</Moment>
      </p>
      </div>
    );
  }

}

const mapDispatchToProps = {
  deleteHabit: deleteHabit,
}

export default connect(null, mapDispatchToProps)(Habit)
