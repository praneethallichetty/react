//FORWARD REF method

//type rfce fpr functional component

import React from 'react'

// function FRinput() {
//   return (
//     <div>
//       <input type='text'/>
//     </div>
//   )
// }

//3rd step
//created forward ref method
const FRinput =React.forwardRef((props,ref) =>{
    return (
        <div>
            <input type='text' ref={ref}/>
        </div>
    )
}) 

export default FRinput
