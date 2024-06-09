import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Products = () => {
  return (
    <>
    <div>
    <h1>I am product page.</h1>
    <h2>
        <Link to="tshirt">tshirt</Link>
    </h2>
    
    <h2>
        <Link to="pant">pant</Link>
    </h2>
    
    </div>
    <Outlet />
    </>
  )
}

export default Products
