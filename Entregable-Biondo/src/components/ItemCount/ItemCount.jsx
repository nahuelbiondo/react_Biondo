import React, { useEffect, useState } from 'react'
import Boton from '../Boton/Boton'

const ItemCount = ({id, handleComprar}) => {

    const [count,setCount] = useState(1)



    const sumar = () => {
        if(count < 10)
            setCount(count +1)

    }

    const restar = () => {
        if(count>1)
            setCount(count -1)
    }

    const comprar = () => {

        console.log(`compraste ${count} unidades del producto ${id}`)
    }



  return (
    <div>
        <Boton texto="-" fn={restar}/>
        <span>{count}</span>
        <Boton texto="+" fn={sumar}/>
        {/* <Boton texto="Comprar" fn={comprar}/>  */}
        <button onClick={()=>handleComprar(count)}>Comprar</button>
    </div>
  )
}

export default ItemCount