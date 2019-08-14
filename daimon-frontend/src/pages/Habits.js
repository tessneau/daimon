import React, { Component } from 'react';
import { connect } from 'react-redux';
import Habit from '../components/Habit';
import '../style/Habits.scss';

class Habits extends Component {

  generateHabits = () => {
    if (this.props.habits){
    return this.props.habits.map(habit => <Habit key={habit.id} habit={habit}/>)
  }}

  render() {
    return (
      <div className="habits-container">
      <h1>HABITS</h1>
      <h3>all habits:</h3>
      <div className="habits-ul">
      {this.generateHabits()}
      </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    habits: state.currentUser.habits
  }
}

export default connect(mapStateToProps)(Habits)
