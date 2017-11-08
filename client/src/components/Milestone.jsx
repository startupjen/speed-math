import React from 'react'
import $ from 'jquery'

class Milestone extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      milestones: [],
      currentGoal: 0,
      consecutiveProblemsToCompleteGoal: null
    }
  }

  componentDidMount() {
    console.log('get foo')
    $.ajax({
      method: "GET",
      url: "http://127.0.0.1:3939/user/foo",
    }).done( (data) => {
      console.log(`user data is ${JSON.stringify(data)} typeof data is ${typeof data} ArrayisArray ${Array.isArray(data)}`)
      this.setState( { currentGoal: data.goalId } )
    }).fail ( () => {
      console.log('error fetching user data')
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(`this.state.consecutiveProblemsToCompleteGoal ${this.state.consecutiveProblemsToCompleteGoal}`)
    console.log(`this.props.completedCorrectProblemCount ${this.props.completedCorrectProblemCount}`)
    console.log(`this.state.currentGoal ${this.state.currentGoal}`)
    if (this.state.currentGoal === 1 && this.props.isTutorialCompleted !== nextProps.isTutorialCompleted) {
        $.ajax({
          method: "POST",
          url: "http://127.0.0.1:3939/user/foo/nextGoal",
          data: {
            newGoal: this.state.currentGoal + 1
          }
        }).done( (data) => {
          console.log(`successfully updated database! ${JSON.stringify(data)} typeof ${typeof data}`)
          if (data.consectiveGoal !== null) {
            this.setState( {
              consecutiveProblemsToCompleteGoal: data.consecutiveGoal,
              currentGoal: this.state.currentGoal + 1
            })
            console.log('boo got in here')
            this.props.resetConsecutiveCounter()
          }
        }).fail ( () => {
          console.log('error updating user info in database!')
        })
    }

    else if (this.state.consecutiveProblemsToCompleteGoal <= this.props.completedCorrectProblemCount) {
      //increment goal in user profile and get the next goal
        $.ajax({
          method: "POST",
          url: "http://127.0.0.1:3939/user/foo/nextGoal",
          data: {
            newGoal: this.state.currentGoal
          }
        }).done( (data) => {
          console.log(`successfully updated database! yaaay`)
          if (data.consectiveGoal !== null) {
            this.setState( {
              consecutiveProblemsToCompleteGoal: data.consecutiveGoal,
              currentGoal: this.state.currentGoal + 1
            })
            this.props.resetConsecutiveCounter()
          }
          
        }).fail ( () => {
          console.log('error updating user info in database!')
        })
    }
    //if the number of problems is completed to current goal, then grab next requirement from 
    //database

  }

  handleClick() {
    //grabs the list from database
    if ( $('.milestoneList').css("visibility") === "visible" ) {
      $('.milestoneList').css("visibility", "hidden")
    } else {
      $('.milestoneList').css("visibility", "visible")
    }

    $.ajax({
      method: "GET",
      url: "http://127.0.0.1:3939/user/milestones",
    }).done( (data) => {
      console.log(`log the data: ${JSON.stringify(data)} typeof data is ${typeof data} ArrayisArray ${Array.isArray(data)}`)
      this.setState({'milestones': data } )
    }).fail ( () => {
      console.log('errrrrrrorrr')
    })
  }

  render() {
    return (
      <div>
        <div className="milestoneButton"><button onClick={this.handleClick.bind(this)}>Milestones</button></div>
        <div className="milestoneList">
            {this.state.milestones.map( (milestone,i) => {
              //if their goal is less than current goal, then add checkmark
              if (i + 1 < this.state.currentGoal ) { return <div className="goal checked-goal" key={i}>✓ {milestone.goal}</div> }
              else { return <div className="goal unchecked-goals" key={i}>{milestone.goal}</div> }
            })}
        </div>
      </div>
    )
  }
}


export default Milestone