import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      someProp: 'bloop'
    }
  }


  render() {
    return (
      <div>some text here
        <div className="blah">
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))