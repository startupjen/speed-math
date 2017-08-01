import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import Problem from './components/Problem.jsx'
import Milestone from './components/Milestone.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      someProp: 'bloop'
    }
  }


  render() {
    return (
      <div>
        <div><Milestone /></div>
        <div className="problem-container">
          <Problem />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))