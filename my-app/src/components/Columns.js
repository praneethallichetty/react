import React from 'react'

function Columns() {
    const items=[]
  return (
    <React.Fragment>
        {
            items.map(item=>(
                //we can use key attribute also in react 
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.value}</p>
                </React.Fragment>

            ))
        }
      <td>Name</td>
      <td>Youtube channel</td>
    </React.Fragment>
  )
}

export default Columns
