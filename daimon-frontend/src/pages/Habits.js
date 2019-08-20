import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentHabits } from '../actions/habitActions'
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
    if (this.props.user.habits){
      console.log(this.props.user.habits)
    return this.props.user.habits.map(habit => <Habit key={habit.id} {...habit.habit}/>)
  }}

  render() {
    return (
      <div className="habits-container">
      <h1>HABITS</h1>
      <button className="btn" onClick={this.handleModal}>++++</button>
      {this.state.show ? <HabitModal show={this.state.show} handleModal={this.handleModal} /> : null}
      <h3>all habits:</h3>
        <div className="habits-ul">
          {this.generateHabits()}
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.currentUser
  }
}

// const mapDispatchToProps = {
//   getCurrentHabits: getCurrentHabits
// }

export default connect(mapStateToProps)(Habits)
