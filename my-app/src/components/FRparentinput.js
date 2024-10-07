//type rce for class component code snippet

import React, { Component } from 'react'
import FRinput from './FRinput'

 class FRparentinput extends Component {
    constructor(props) {
      super(props)
      //1st step--- creating ref for a given input property
      this.inputRef = React.createRef()
     
    }
    clickhandler =()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        {/* 2nd step---- adding created ref in render method of input element */}
        <FRinput ref={this.inputRef}/>
        <button onClick={this.clickhandler}>Focus INPUT</button>
      </div>
    )
  }
}

export default FRparentinput
