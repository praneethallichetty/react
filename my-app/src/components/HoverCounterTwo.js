import React, { Component } from 'react'

 class HoverCounterTwo extends Component {
    
  render() {
    const {Count,incrementCount}=this.props
    return <h3 onMouseOver={incrementCount}>Hover {Count} times</h3>
    
  }
}

export default HoverCounterTwo
