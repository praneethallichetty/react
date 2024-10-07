import React, { Component } from 'react'

 class ClickCounterTwo extends Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      Count : 0
  //   }
  // }
  // incrementCount=()=>{
  //     this.setState(prevstate => {
  //         return {Count:prevstate.Count + 1}
  //     })
  // }
  render() {
    const {Count,incrementCount} = this.props
    return (
     <button onClick={incrementCount}>Clicked {Count} times</button>
      
    )
  }
}

export default ClickCounterTwo
