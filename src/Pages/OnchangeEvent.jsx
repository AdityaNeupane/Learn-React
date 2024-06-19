import React, { useState } from 'react'
import axios from 'axios';
const OnchangeEvent = () => {

const [name, setname] = useState("");
const [email, setemail] = useState("");

const handlesubmit = (e) => {
e.preventDefault();
console.log(name, email);



axios.post("https://6671136ae083e62ee439f0bd.mockapi.io/Crud",
{
   name,
    email,
});

e.target.reset();

};

  return (
     <>
     <h1>welcome to onchange event class</h1>
     <form onSubmit={handlesubmit}>
<label>enter your name</label>

<input 
type="text"
name="name"
id="name"
onChange={(e) => {
     setname(e.target.value);
    }
}
/>

<label>enter your email</label>
<input 
type="text"
name="email"
id="email"
onChange={(e) => {
     setemail(e.target.value);
    }
}
/>

<button type="submit">submit</button>
     </form>
     
     {name}

    <br></br>
     {email}
     
     </>
  )
}

export default OnchangeEvent
