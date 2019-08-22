import React, { Component } from 'react';
import '../style/ProgressBar.scss'

class ProgressBar extends Component {


  render() {
    let progress
    progress = progress > 100 ? 100 : (this.props.progress_count / this.props.frequency)*100
    const style = {
      width: `${progress}%`
    };
    // console.log(this.props)
    return (
      <div className="progress-bar-container">
        <div className="meter">
          <span style={style}>{progress ? `${progress}%` : null }</span>
        </div>
      </div>
    );
  }

}

export default ProgressBar;
