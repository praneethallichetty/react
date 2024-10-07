import React from 'react';
const Hello=()=>{
    // return(
    //     <div>
    //         <h1>Hello My guys</h1>
    //     </div>
    // );
    return React.createElement('div',
        {id:'hello',class:'dummyclass'},
        React.createElement('h2',null,'Hello sir/Medam'))
}
export default Hello