import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
<NavBar className='nav'/> {/* para nosotros el navbar no se re genera entonces va fuera del router */}
    <Routes> 

      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/categoria/:categoryName'element={<ItemListContainer/>}/>
      <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    
    </BrowserRouter>
    
   
  
   
   
  )
}

export default App
