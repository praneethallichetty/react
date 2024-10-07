//type rfce for code snippet

//LIST RENDERING

import React from 'react'

function NameList() {
    //example 1
    // var array1 = [2,4,6,8]
    // const bunny = array1.map(x=>x*2)
    // console.log(bunny)
    
    //example2
    const names = ['ajay','vijay','manoj','vijay']
    const nameList= names.map((name,index) => <h2 key={index}>{index}{name}</h2>
   // example 3
    // const persons = [
    //     {
    //         name:'Praneeth',
    //         age:20,
    //         skill:'HTML,CSS',
    //     },
    //     {
    //         name:'Ram',
    //         age:25,
    //         skill:'Python',
    //     },
    //     {
    //         name:'Charan',
    //         age:30,
    //         skill:'React',
    //     }

    // ]
    //  const personList = persons.map((person)=>
    //     <h6>
    //         Iam {person.name}. Iam {person.age}. I know {person.skill}.
    //     </h6>
    //  )
     
    )

    return <div>{nameList}</div>
}

    //    return (
    //     <div>{personList}</div>
    //    // <div>{bunny}</div>

    
//       {/* <h1>{names[0]}</h1>
//       <h2>{names[2]}</h2>
//       <h3>{names[1]}</h3  */}

//      {/* OR */}
// {/* 
//        {
//       names.map(names=><h4>{names}</h4>)
//       } */}
//     </div>
  

export default NameList
