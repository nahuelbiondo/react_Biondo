import React, { useContext, useState } from 'react'
import { CartContext } from '../../contexto/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'


export const Cart = () => {
  const {cart,vaciarCarrito} = useContext(CartContext)



  return (
        <div>
          {
            cart?.map(e=> {

              return (
                <CartItem key={e.id} producto={e}/> 
              )
            })
          }    
          {cart.length > 0 && 
          <>
                    <button onClick={()=>vaciarCarrito()}>Vaciar carrito</button> 
                    <Link to="/checkout">
                    <button> Terminar compra</button>
                    </Link>
          
          </>
          }
        </div>
  )
}

