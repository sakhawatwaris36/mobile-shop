import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import{Routes,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signin from './Signin'
import Dashboard from './Dashboard'
import Products from './Products'
import  Orders from './orders'
import Customers from './Customers'
import Messages from './Messages'
import Settings from './Settings'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Routes>

      <Route path= '/' element={<Home/>}/>
      <Route path= '/Login' element={<Login/> }/>
      <Route path= '/Signin' element={<Signin/> }/>
      <Route path= '/Dashboard' element={<Dashboard/> }/>
      <Route path= '/Products' element={<Products/> }/>
      <Route path= '/Orders' element={<Orders/> }/>
      <Route path= '/Customers' element={<Customers/> }/>
      <Route path= '/Messages' element={<Messages/> }/>
      <Route path= '/Settings' element={<Settings/> }/>
     
     
      
    </Routes>
     
    </>
  )
}

export default App
