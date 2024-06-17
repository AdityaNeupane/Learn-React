import React from 'react';
import { useState } from 'react';

const UseStateObj = () => {

    const obj = {
        name: "bijay",
        age: 22,
        gender: "male",
        country: "nepal",
        isMarried: true
    };

    const [value, setValue] = useState(obj);

    const changemystate = () => {
        setValue({
            name: "aditya",
            age: 25,
            gender: "male",
            country: "nepal",
            isMarried: false
        });

    };

  return (
    <>
    <h1>{value.name}</h1>
    <h1>{value.age}</h1>
    <h1>{value.gender}</h1>
    <h1>{value.country}</h1>
    <h1>{value.isMarried}</h1>
    <button onClick={changemystate}>click me</button>
    
    </>
  );
};

export default UseStateObj;
