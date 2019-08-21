import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import Moment from 'react-moment';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';
import 'moment-timezone';
import { connect } from 'react-redux';
import { deleteHabit, updateHabitProgress } from '../actions/habitActions'
import '../style/Habit.scss';

class Habit extends Component {

  state = {
    progress_count : this.props.progress_count,
    percent: Math.round(this.props.percent),
    data: this.getData(0)
  }

  componentDidMount(){
    this.setState({
        data: this.getData(this.state.percent)
      });
  }

  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  handleClick = () => {
    this.props.updateHabitProgress(this.props.id)
    if (this.state.progress_count < this.props.habit.maxFrequency) {
    this.setState({progress_count: this.state.progress_count + 1}, () => {
      let updatedPercent = (this.state.progress_count/ this.props.habit.maxFrequency)*100
      // updatedPercent = (updatedPercent >= 100) ? 100 : updatedPercent;
      if (updatedPercent >= 100) {
        updatedPercent = 100
        this.setState({
          percent: updatedPercent,
          data: this.getData(updatedPercent)
          })
      } else {
        this.setState({
          percent: updatedPercent,
          data: this.getData(updatedPercent)
          })
      }})
    }
  }

  handleDelete = () => {
    this.props.deleteHabit(this.props.id)
  }

  generatePie = () => {
      return (
        <div className='actual-pie' id={this.props.id} onClick={this.handleClick}>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
        <VictoryPie
          standalone={false}
          animate={{ duration: 1000 }}
          width={400} height={400}
          data={this.state.data}
          innerRadius={100}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: { fill: (d) => {
              let color = d.y > 50 ? "rgb(254, 132, 14)" : "tomato";
              color = d.y === 100 ? "rgb(200, 191, 100)" : color
              return d.x === 1 ? color : "transparent";
            }}
          }}
        />
        <VictoryAnimation duration={1000} data={this.state}>
          {(newProps) => {
            console.log(newProps)
            return (
              <>
              <VictoryLabel
                textAnchor="middle" verticalAnchor="middle"
                x={200} y={180}
                text={this.props.habit.name}
                style={this.props.habit.positive ? { fontSize: 30, fill: '#30180A', fontFamily: 'Oleo Script' } : { fontSize: 30, fill: 'white', fontFamily: 'Oleo Script' }}
              />
              <VictoryLabel
                textAnchor="middle" verticalAnchor="middle"
                x={200} y={240}
                text={`${Math.round(newProps.percent)}%`}
                style={this.props.habit.positive ? { fontSize: 30, fill: '#30180A', fontFamily: 'Oleo Script' } : { fontSize: 30, fill: 'white', fontFamily: 'Oleo Script' }}
              />
              </>
            );
          }}
        </VictoryAnimation>
      </svg>
      </div>
      )
  }

  render() {
    const { habit } = this.props
    return (
      <div className="habit-and-progress" style={habit.positive ? {backgroundColor : '#F0EAD6'} : {backgroundColor : 'maroon'}}>

        <button className="delete-habit" onClick={this.handleDelete}>x</button>

        <div className="habit-card" onClick={this.handleClick}>
          <h3>{habit.positive ? 'daily goal: ' + habit.maxFrequency : null}</h3>
          <h3>{habit.positive ? 'progress: ' + this.state.progress_count : null}</h3>
        </div>

        <div className="habit-pie">
          {this.generatePie()}
        </div>

      </div>
    );
  }

}

const mapDispatchToProps = {
  updateHabitProgress: updateHabitProgress,
  deleteHabit: deleteHabit,
}

export default connect(null, mapDispatchToProps)(Habit)

// <p>first day: <Moment fromNow>{habit.firstDay}</Moment> </p>

// <ProgressBar frequency={habit.maxFrequency} progress_count={this.state.progress_count}/>
