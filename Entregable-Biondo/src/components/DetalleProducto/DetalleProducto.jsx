import React from 'react'

const DetalleProducto = ({producto}) => {
    const {id,image,title,description,category,rating,price} = producto


  return (
  <div>
    <h5>{title}</h5>
    <img src={image} alt={`imagen del producto ${title}` }/>
    <p>{description}</p>
    <p>{price}</p>
    {/* <button>Ver siguiente</button>
    <button>Ver anterior</button> */}
    {/* <Link to={`/detalle/${id}`} className="boton">Ver más</Link> */}
    </div>
  )
}

export default DetalleProducto