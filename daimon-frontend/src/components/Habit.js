import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import Moment from 'react-moment';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';
import 'moment-timezone';
import { connect } from 'react-redux';
import { deleteHabit, updateHabitProgress } from '../actions/habitActions'
import '../style/Habit.scss';

const colorsMap = {
  1: {a: "rgb(250, 154, 133)", b: "rgb(119, 33, 46)" },
  2: {a: "rgb(200, 191, 100)", b: "rgb(200, 90, 100)" },
  3: {a: "rgb(200, 191, 255)", b: "rgb(107, 91, 149)"},
  4: {a: "rgb(254, 132, 14)", b: "tomato"}
}

class Habit extends Component {

  state = {
    progress_count : this.props.progress_count,
    percent: 50,
    data: this.getData(0),
    clickedHabit: null
  }

  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  handleClick = (e) => {
    this.props.updateHabitProgress(this.props.id)
    this.setState({progress_count: this.state.progress_count + 1})

    console.log('yo')

    const id = +e.target.parentElement.id
    console.log(id)
    let percent
    // console.log('ayo')
    percent += this.state.progress_count
    percent = (percent > 100) ? 0 : percent;
    this.setState({
      percent, data: this.getData(percent)
    });
  }

  handleDelete = () => {
    this.props.deleteHabit(this.props.id)
  }

  render() {
    console.log(this.props)
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

      <div className="pie">
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
              const color = d.y > 50 ? "rgb(250, 154, 133)" : "rgb(119, 33, 46)";
              return d.x === 1 ? color : "transparent";
            }}
          }}
        />
        <VictoryAnimation duration={1000} data={this.state}>
          {(newProps) => {
            return (
              <>
              <VictoryLabel
                textAnchor="middle" verticalAnchor="middle"
                x={200} y={180}
                text={habit.name}
                style={{ fontSize: 30, fontFamily: 'Oleo Script' }}
              />
              <VictoryLabel
                textAnchor="middle" verticalAnchor="middle"
                x={200} y={240}
                text={`${Math.round(newProps.percent)}%`}
                style={{ fontSize: 30, fontFamily: 'Oleo Script' }}
              />
              </>
            );
          }}
        </VictoryAnimation>
      </svg>
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
