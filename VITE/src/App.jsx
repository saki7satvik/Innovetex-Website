import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Signup from './components/Signup'
import { BrowserRouter,
  Route,
  Link,
  Routes
 } from 'react-router-dom'
 import { AuthProvider } from './Authentication/context'; 
 import Profile from './components/Profile.jsx';

import Home from './components/Home'
function App() {

  return (
    <>
      <BrowserRouter>
     
      <Routes>
       
        <Route path='/' element={<Home/>}/> 
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
       

      </Routes>
     
      </BrowserRouter>
    </>
  )
}

export default App
