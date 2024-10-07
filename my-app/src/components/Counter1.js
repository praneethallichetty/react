import React, { Component } from 'react'

 class Counter1 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           Count : 0
        }
      }
      incrementCount=()=>{
          this.setState(prevstate => {
              return {Count:prevstate.Count + 1}
          })
      }
  render() {
    return (
      <div>
        {this.props.render(this.state.Count, this.incrementCount)}
      </div>
    )
  }
}

export default Counter1
