import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetalleProducto from '../DetalleProducto/DetalleProducto'



export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
const [error, setError] = useState(null)
const [cargando,setCargando] = useState(true)
const {id} = useParams()

const [prodId, setProdId] = useState(id)

// const mostrarSiguiente = () => {setProdId(prodId +1)}
// const mostrarAnterior = () => {if(prodId > 0){setProdId(prodId - 1)}}

    useEffect(()=>{
        setCargando(true)
        const fetchProducto = async () => {
            try{

                const res = await fetch(`https://fakestoreapi.com/products/${prodId}`)
                const data = await res.json()
                setProducto(data)
            } catch(error){
                setError(error)
            }finally{
                setCargando(false)
            }
        }
        
        fetchProducto()

        // fetch('https://fakestoreapi.com/products/1')
        // .then(res=>res.json())
        // .then(json=>console.log(json))

    },[prodId, id])
    
   console.log(producto)


  return (
    <>
{
    cargando ? <h4>Cargando producto</h4>
    :
    <DetalleProducto producto={producto} />

}
</>
  )
}

export default ItemDetailContainer