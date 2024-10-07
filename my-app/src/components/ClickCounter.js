import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

 class ClickCounter extends Component {
    
  render() {
    const {Count,incrementCount} = this.props
    return <button onClick={incrementCount}> Clicked {Count} times</button>
  }
}

export default UpdatedComponent(ClickCounter)
