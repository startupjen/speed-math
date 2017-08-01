import React from 'react'

//does this need to be stateful?
//can we just render a message depending on result?

let message = {
  correct: ['Great job!','Awesome!!'],
  incorrect: ['Nope, try again', 'Not quite','Wrong answer']
}

class AnswerResultMessage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
    <div className="answerMessage">
      {
        if (this.props) {
          
        }
      }
    </div>)
  }

}

export default AnswerResultMessage