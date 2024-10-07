//css stylesheet


import React from 'react'
import './myStyles.css'
function Stylesheet(props) {
    let className=props.primary ? 'primary':''
  return (
    <div>
      <h1 className={className} id='font'>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
