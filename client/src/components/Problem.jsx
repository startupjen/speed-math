import React from 'react'

import Tutorial from './Tutorial.jsx'
//import AnswerResultMessage from './AnswerResultMessage.jsx'

let message = {
  correct: ['Great job!','Awesome!!'],
  incorrect: ['Nope, try again', 'Not quite','Wrong answer']
}

class Problem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      problemValues: [93, 97],
      userAnswer: '',
      message: ''
    }
  }

  getAnswerMessage(isCorrect) {
    if (isCorrect) { 
      this.setState({message: message.correct[this.generateRandomNumber(0,message.correct.length-1)]})

    } else {
      this.setState({message: message.incorrect[this.generateRandomNumber(0,message.incorrect.length-1)]})
      
    }
  }

  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateMultiplicationProblem(min,max) {
    let num1 = this.generateRandomNumber(90,99)
    let num2 = this.generateRandomNumber(90,99)
    this.setState({
      problemValues: [num1, num2],
      userAnswer: '',
      message: ''
    })
  }

  handleClick(event) {
    let isAnswerCorrect = this.state.problemValues[0] * this.state.problemValues[1] === parseInt(this.state.userAnswer);
    if ( isAnswerCorrect ) {
      console.log('answer is correct!')
      this.generateMultiplicationProblem(90,99)
      this.props.incrementCompletedCorrectProblemCount()
    } else {
      console.log('incorrect! try again!')
      this.getAnswerMessage(false)
      this.props.resetConsecutiveCounter()
    }
  }

  handleChange(event) {
    this.setState({ userAnswer: event.target.value })
  }

  changeInputValue(value) {
    this.setState({userAnswer: value})
  }

  render() {
    return (
      <div>
        <Tutorial markTutorialCompleted={this.props.markTutorialCompleted} problemValues={this.state.problemValues} changeInput={this.changeInputValue.bind(this)} />
        <div className="problemEntry">
          <div className="answerResultMessage">{this.state.message}</div>
          <div className="problemLine">
            <span className="problemValue1">{this.state.problemValues[0]}</span> X 
            <span className="problemValue2"> {this.state.problemValues[1]}</span> = 
            <span className="userAnswer"> <input type="text" value={this.state.userAnswer} onChange={this.handleChange.bind(this)}/> </span> 
            <span className="submitAnswer"><button onClick={this.handleClick.bind(this)}>Check Answer</button></span>
          </div>
        </div>
      </div>
    )
  }


}

export default Problem