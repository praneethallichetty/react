//type rpce for react pure component code snippet

import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
  render() {
    console.log('pure component render')
    return (
      <div>
        PURE COMPONENT{this.props.name}
      </div>
    )
  }
}

export default PureComp



