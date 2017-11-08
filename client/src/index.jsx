import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import Problem from './components/Problem.jsx'
import Milestone from './components/Milestone.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      someProp: 'bloop',
      isTutorialCompleted: false,
      completedCorrectProblemCount: 0
    }
  }

  incrementCompletedCorrectProblemCount() {
    this.setState({ completedCorrectProblemCount: this.state.completedCorrectProblemCount+1 })
    console.log(`This is completedCorrectProblemCount ${this.state.completedCorrectProblemCount}`)
  }

  resetConsecutiveCounter() {
    this.setState( {completedCorrectProblemCount: 0} )
  }

  markTutorialCompleted() {
    this.setState( { isTutorialCompleted: true} )
  }

  render() {
    return (
      <div>
        <div><Milestone isTutorialCompleted={this.state.isTutorialCompleted} completedCorrectProblemCount={this.state.completedCorrectProblemCount} resetConsecutiveCounter={this.resetConsecutiveCounter.bind(this)} /></div>
        <div className="problem-container">
          <Problem markTutorialCompleted={this.markTutorialCompleted.bind(this)} incrementCompletedCorrectProblemCount={this.incrementCompletedCorrectProblemCount.bind(this)} resetConsecutiveCounter={this.resetConsecutiveCounter.bind(this)} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))