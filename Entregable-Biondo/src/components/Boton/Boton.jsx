import React from 'react'

const Boton = ({texto,fn}) => {
  return (
    <>
    <button className="green" onClick={() => fn()}>{texto}</button>
    </>
  )
}

export default Boton