// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevSpeed => ({
        count: prevSpeed.count + 10,
      }))
    }
  }

  onBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevSpeed => ({
        count: prevSpeed.count - 10,
      }))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">SPEEDOMETER </h1>
        <img
          alt="speedometer"
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h2 className="heading"> Speed is {count}mph</h2>
        <p className="para"> Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button1" type="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="brake" type="button" onClick={this.onBrake}>
            Apply brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
