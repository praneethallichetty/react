//type rce for class component code snippet 

import React, { Component } from 'react'
import ComponentE from './ComponentE'
 class ComponentF extends Component {
  render() {
     return <ComponentE />
  }
}

export default ComponentF
