import React, { useState } from 'react'

const Checkout = () => {

    const[nombre, setNombre] = useState()
    const[mail, setMail] = useState()
    const[direccion, setDireccion] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

    }

  return (
    <div>
        <h3>Ingresá tus datos de compra</h3>
        <form action="" className='form'onSubmit={(e)=> handleSubmit(e)} >
        <label htmlFor="nombre">Nombre</label>    
        <input type="text" name="nombre" onChange={(e)=> setNombre(e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={(e)=> setMail(e.target.value)}/>
        <label htmlFor="direccion">Dirección</label>
        <input type="text" name="direccion"  onChange={(e)=> setDireccion(e.target.value)}/>
        <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Checkout