//type rce for class component code snippet

import React, { Component } from 'react'

 class EventBind extends Component {
    //type rconst for classcomponent constructor
    constructor(props) {
      super(props)
    
      this.state = {
         Message:'hello'
      }
    //third approach
    this.clickhandler=this.clickhandler.bind(this)
      
    }
    clickhandler(){
        this.setState({
            Message:'hey!hope you are fine'
        }
        )
        console.log(this)
    }
    
  render() {
    return (
      <div>
        <div>{this.state.Message}</div>
        {/* first approach */}
        {/* <button onClick={this.clickhandler.bind(this)}>Click</button> */}
        {/* second approach */}
        {/* <button onClick={()=>this.clickhandler()}>Click</button> */}
        {/* third approach */}
        <button onClick={this.clickhandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
