import React, { useEffect } from 'react'

const UseEffecthook = () => {
    useEffect(() => {
        alert("hello");
    }, []);
  return (
    <>
    <h1>use effect hook</h1>
    
    </>
  )
}

export default UseEffecthook



// for alert messages 

// const UseEffecthook = () => {

//     useEffect( () => {
//         alert("hello");
//     }, []);

//     return (
//         <>
//         <h1>use effect hook</h1>
//         </>
//     )
//   }
//     export default UseEffecthook
    