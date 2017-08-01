import React from 'react'
import $ from 'jquery'

let instructions = [
  '',
  'Pick a convenient reference number', //pop 100 out somewhere
  'Find the difference', //change the colors
  'Find the difference again', //change the colors
  'Find the diagonal difference', //create a circle
  'Multiply that by the reference number',
  'Multiply these numbers together',
  'Add them together', //put a plus together
  'DONE!!' //fill in the value answer
]

//pass in the variables
//it does need a state to pass

class Tutorial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      instruction: instructions[1],
      referenceNumber: '',
      diff1: '',
      diff2: ''
    }
  }

  //each time the animations are difference
  //how best to handle that?

  //this gets floated around
  //and bonded near the elements we want
  //on every click, we need to re-render the entire page?

  //do we change the className on each one?

  executeNextStep() {
    let step = this.state.step
    if (step === 1) {
      this.setState({ referenceNumber: 100 })
      $('.referenceMessage').css("visibility", "visible")
    } else if (step === 2) {
      //reference number minus first number
      $('.referenceNumber').css("color","blue")
      $('.problemValue1').css("color","blue")

      let diff1 = this.state.referenceNumber - this.props.problemValues[0]
      
      $('.problemEntry').append(`<div class="diff"><span class="diff1">${diff1}</span></div>`)
      $('.diff1').css("color","blue")

      this.setState({ diff1: diff1 })
    } else if (step === 3) {
      let diff2 = this.state.referenceNumber - this.props.problemValues[1]
      this.setState({ diff2: diff2 })
      $('.diff').append(`<span class="diff2">${diff2}</span>`)
      $('.problemValue1').css("color","black")
      $('.problemValue2').css("color","blue")
      $('.diff1').css("color","black")
      $('.diff2').css("color","blue")
    } else if ( step === 4 ) {
      $('.referenceNumber').css("color","black")
      $('.problemValue1').css("color", "orange")
      $('.diff2').css("color", "orange")
      $('.problemValue2').css("color", "green")
      $('.diff1').css("color", "green")
      $('.problemEntry').append('<hr class="tutorial">') 
    } else if ( step === 5 ) {
      let diff = this.props.problemValues[0] - this.state.diff2
      $('.problemEntry').append(`<span class="difference">${diff}</span>`)
    } else if ( step === 6 ) {
      $('.problemValue1').css("color", "black")
      $('.problemValue2').css("color", "black")
      $('.diff1').css("color", "black")
      $('.diff2').css("color", "black")
      $('.referenceNumber').css("color","blue")
      $('.difference').append(`<span> X <span class="referenceCoordinate">${this.state.referenceNumber}</span> = </span>`)
      $('.referenceCoordinate').css("color","blue")
    } else if ( step === 7 ) {
      $('.referenceNumber').css("color","black")
      $('.referenceCoordinate').css("color","black")
      $('.difference').append(`<span> ${this.state.referenceNumber*(this.props.problemValues[0]-this.state.diff2)} </span>`)
    } else if ( step === 8 ) {
      $('.problemEntry').append(`<div class="diffMult">${this.state.diff1} X ${this.state.diff2}</div>`)
      $('.diff1').css("color","purple")
      $('.diff2').css("color","purple")
      $('.diffMult').css("color", "purple")
    } else if ( step === 9 ) {
      $('.diffMult').append(`<span>= ${this.state.diff1* this.state.diff2}</span>`)
    } else if ( step === 10 ) {
      $('.diffMult tutorial').css("color","black")
      $('.diff1').css("color","black")
      $('.diff2').css("color","black")
      $('.problemEntry').append(`<div class="finalCalculation">${this.state.referenceNumber*(this.props.problemValues[0]-this.state.diff2)} + ${this.state.diff1* this.state.diff2} = <span class="finalAnswer">${this.state.diff1* this.state.diff2 + this.state.referenceNumber*(this.props.problemValues[0]-this.state.diff2)}</span></div>`)
      $('.finalAnswer').css("color","blue")
    }
    this.setState( { step: this.state.step+1 } )
  }


  handleClick(event) {
    console.log('bloop')
    this.executeNextStep()
  }

  handleResetClick(event) {
    console.log('reset tutorial')
    $('.finalCalculation').remove()
    $('.diff').remove()
    $('.diffMult').remove()
    $('.difference').remove()
    this.setState({ step: 1 })
    $('.referenceMessage').css("visibility", "hidden")
    $('.tutorial').remove()
  }


  render() {
    return (
      <div>
        <div className="tutorialButton"><button onClick={this.handleClick.bind(this)}>Play Tutorial</button><button onClick={this.handleResetClick.bind(this)}>Reset Tutorial</button></div>
        <div className="referenceMessage">Reference Number<div className="referenceNumber">{this.state.referenceNumber}</div></div>
      </div>
    )
  }


}

export default Tutorial