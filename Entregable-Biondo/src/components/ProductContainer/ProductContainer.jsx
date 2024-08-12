import React from 'react'
import './productContainer.css'
import { Link } from 'react-router-dom'
const ProductContainer = ({producto}) => {

  const {id,image,title,description,category,rating,price} = producto

  return (
    <div className='prodContainer'>

    <h5>{title}</h5>
    <img src={image} alt={`imagen del producto ${title}` }/>
    <p>{description}</p>
    <p>{price}</p>
    <Link to={`/detalle/${id}`} className="boton">Ver más</Link>
    
    </div>
    )
}

export default ProductContainer