import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

//  const mostrarMensaje = ()=>{
//    alert("mensaje desde context")
//  }

function mostrarMensaje(){
    alert("mensaje desde context")
}


// const agregarAlCarrito = (producto)=>{

//     setCart([...cart, producto])
// }

const agregarAlCarrito = (producto) => {
    const productoEnCarrito = cart.find((item) => item.id === producto.id);
  
    if (productoEnCarrito) {
      setCart(
        cart.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + producto.cantidad }
            : item
        )
      );
    } else {
        setCart([...cart, producto])
    }
  };


const vaciarCarrito = () => {
    setCart([])
}


const eliminarProducto = (id) =>{
    const newCart = cart.filter(e => e.id !== id)
    setCart(newCart)
}


const mostrarCantidad = () =>{
    return cart.reduce((acc,curr) => acc + curr.cantidad,0)
}

console.log("carrito: " , cart) 

return (
<CartContext.Provider value={{ mostrarMensaje, cart, setCart, agregarAlCarrito, vaciarCarrito, eliminarProducto, mostrarCantidad}}>
{children}

</CartContext.Provider>

)
}