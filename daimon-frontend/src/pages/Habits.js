import React, { Component } from 'react';
import { connect } from 'react-redux';
import Habit from '../components/Habit';
import HabitModal from '../components/HabitModal'
import '../style/Habits.scss';

class Habits extends Component {

  state = {
    show: false
  }

  handleModal = () => {
    this.setState({show: !this.state.show})
  }

  generateHabits = () => {
    if (this.props.userHabits){
    return this.props.userHabits.map(habit => {
      const percent = habit.habit.maxFrequency === 0 ? 100 : (habit.progress_count / habit.habit.maxFrequency)*100
      return <Habit key={habit.id} {...habit} percent={percent}/>
      })
  }}

  render() {
    return (
      <div className="habits-container">
      <h1>HABITS</h1>
      <button className="btn" onClick={this.handleModal}>++++</button>
      {this.state.show ? <HabitModal show={this.state.show} handleModal={this.handleModal} /> : null}
        <div className="habits-ul">
          {this.generateHabits()}
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    userHabits: state.currentUser.habits
  }
}

export default connect(mapStateToProps)(Habits)
