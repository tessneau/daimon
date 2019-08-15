import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import '../style/Habit.scss';

class Habit extends Component {

  render() {
    return (
      <div className="habit-card">
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

export default Habit;
