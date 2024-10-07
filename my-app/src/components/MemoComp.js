// type rfce for functional component code snippet

import React from 'react'

function MemoComp({name}) {
  console.log('Rendering Memocomponent')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
