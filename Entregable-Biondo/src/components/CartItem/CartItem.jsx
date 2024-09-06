import React, { useContext } from 'react'
import { CartContext } from '../../contexto/CartContext'

const CartItem = ({producto}) => {

  const {cart,eliminarProducto} = useContext(CartContext)





  return (
    <div>
        <h2>{producto.title}</h2>
        <p>Precio: {producto.price}</p>
        <p>Cantidad: {producto.cantidad}</p>
        <p>Total: {producto.price * producto.cantidad}</p>
        <button onClick={()=>eliminarProducto(producto.id)}>Eliminar producto</button>
    </div>
  )
}

export default CartItem