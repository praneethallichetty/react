// type rce for structure of code snippet

import React, { Component } from 'react'

 class Classclick extends Component {
    clickhandler(){
        console.log("you clicked the button")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickhandler}>Click Me</button>
      </div>
    )
  }
}

export default Classclick
