import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import './App.css'
import Home from './pages/home'
import About from './pages/about'



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>


      </Routes>
    </>
  )
}

export default App
