import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const FetchData = () => {

const [posts, setPost] = useState([]);

useEffect(() => {
    axios.get("https://6671136ae083e62ee439f0bd.mockapi.io/Crud")
    .then(res => setPost(res.data))

    .catch((err) => console.log(err))



}, [])






  return (
    <>
    <h1>FetchData</h1>
    <h2>here is the map data</h2>

    {posts.map((post) => (
      <h3><ul key={post.id}>
      <li>{post.id}</li>
      <li>{post.name}</li>
      <li>{post.email}</li>
      </ul></h3>  
    
    ))}
    
    
    
    </>
  )
}

export default FetchData
