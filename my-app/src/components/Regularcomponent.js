//type rce for class component code snippet

import React, { Component } from 'react'

 class Regularcomponent extends Component {
  render() {
    console.log("****regular component render****")
    return (
      <div>
        Regular Component{this.props.name}
      </div>
    )
  }
}

export default Regularcomponent
