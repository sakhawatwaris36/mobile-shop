import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import{Routes,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signin from './Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    {/* */}
    <Routes>

      <Route path= '/' element={<Home/>}/>
      <Route path= '/Login' element={<Login/> }/>
      <Route path= '/Signin' element={<Signin/> }/>

    </Routes>
     
    </>
  )
}

export default App
