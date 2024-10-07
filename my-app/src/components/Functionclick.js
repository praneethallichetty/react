// type rfce for structure of code snippet

import React from 'react'

function Functionclick() {
    function clickhandler(){
        console.log("button clicked")
    }
  return (
    <div>
      <button onClick={clickhandler}>Click here</button>
    </div>
  )
}

export default Functionclick

