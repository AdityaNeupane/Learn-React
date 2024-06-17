import React from 'react'
import { useState } from 'react'
import { useActionData } from 'react-router-dom'

// use state hook - first


const Usestatehook = () => {
    const myarray = useState("bijay");



    // use state hook -second 
    const [myname, setname] = useState("bijay");

    const changemyname = () => {
        setname("aditya")
    }




  return (
    <>
    <h1>first</h1>
    <h1>Usestatehook</h1>
    
    <h1>my name is {myarray[0]}</h1>

    <button onClick={() => myarray[1]("aditya")}>
        click me
        </button>
    
     <br></br>
     <br></br>
     <br></br>
    


    <h2>second</h2>
    <h2>use state hook</h2>

    <h1>my name is {myname}</h1>
    <button onClick={changemyname}>click me</button>
    

    </>
  )
}

export default Usestatehook







// const Usestatehook = () => {
//     const myarray = useState("bijay");
    
//     return (
//         <>
//         <h1>use state hook</h1>
//         <h1>my name is (myarray[0])</h1>
//         <button onClick={() => myarray[1]("aditya")}>
//             click me
//             </button>
//         </>
//     )
// }

// export default Usestatehook




// const Usestatehook = () => {

//     const [myname, setname] = useState("bijay");

//     const changemyname = () => {
//         setname("aditya")
//     }

//     return (
//         <>
//         <h1>use state hook</h1>
//         <h1>my name is {myname}</h1>
//         <button onClick={changemyname}>click me</button>
//         </>
//     )
//     export default Usestatehook