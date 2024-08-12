import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ProductContainer from '../ProductContainer/ProductContainer'
import { useParams } from 'react-router-dom'
const ItemListContainer = ({saludo}) => {

  const [productos, setProductos] = useState([])
  const [cargando,setCargando] = useState(true)

    const {categoryName} = useParams()

useEffect(()=> {

  setCargando(true)
if (categoryName){

  fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
  .then(res=>res.json())
  .then(json=>setProductos(json))
  .finally(setCargando(false))

}else{

  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>setProductos(json))
  .finally(setCargando(false))

}
 
},[categoryName])
 
if(cargando){
  return(
    <h3>Cargando, por favor espere</h3>
  )
}
  return (
   
    <div className='main'>
      {
        productos.map((el)=>{
          return(
            <ProductContainer key={el.id} producto={el}/>
          )
        })
      }
    
      </div>
  )
}

export default ItemListContainer