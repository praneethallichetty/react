//type rce for class component code snippet 

import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

 class ComponentF extends Component {
  render() {
     return (
        <UserConsumer>
            {Username =>{
                return <div>Hello {Username}</div>
              }
            }
        </UserConsumer>
     )
  }
}

export default ComponentF
