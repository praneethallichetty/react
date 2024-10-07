// type rce for class component code structure

//Conditioanl rendering


import React, { Component } from 'react'

 class usergreeting extends Component {
    //type rconst for class component constructor structure
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    
  render() {
    //Fourth approach --- short circuit operator 

    //return this.state.isLoggedIn && <div>Welcome to my application</div>
    //third approach --- Ternary conditional operator for conditional rendering
    // return this.state.isLoggedIn ?(
    //   <div>Welcome to my app</div>):(
    //   <div>Welcome Guest!!</div> 
    // )

    //second approach --- element variables method conditional rendering

    let Message
    if(this.state.isLoggedIn){
        Message=<div>Welcome to my app</div>
    }
    else{
        Message=<div>Welcome Guest!!</div>
    }
    return<div>{Message}</div>

    //first approach --- if else method conditional rendering

    // if(this.state.isLoggedIn){
    //     return <div>Welcome to my app</div>
    // }
    // else{
    //     return <div>Welcome Guest!!</div>
    // }
    // return (
    //   <div>
    //     welcome to my app
    //   </div>
    // )
  }
}

export default usergreeting
