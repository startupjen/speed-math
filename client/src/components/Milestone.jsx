import React from 'react'
import $ from 'jquery'

class Milestone extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      milestones: []
    }
  }


  handleClick() {
    //grabs the list from database
    $('.milestoneList').css("visibility", "visible")
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
          {this.state.milestones.map( (milestone,i) => <div className="goal" key={i}>{milestone.goal}</div> )}
        </div>
      </div>
    )
  }


}


export default Milestone