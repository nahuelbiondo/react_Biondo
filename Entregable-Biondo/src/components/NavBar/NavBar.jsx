import React, { useEffect, useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
const [categorias, setCategorias] =useState([])

useEffect(() => {
  fetch('https://fakestoreapi.com/products/categories')
  .then(res=>res.json())
  .then(json=>setCategorias(json))
}, [])


  return (
    <div className='header'>
      <Link to='/'>
        <h2>Moda Show</h2>
      </Link>
        <ul>
          {
            categorias.length>0 && categorias.map(e => <Link key={e} to={`/categoria/${e}`}>{e}</Link>)
          }
        </ul>
        <CartWidget/>
    </div>
  )
}

export default NavBar