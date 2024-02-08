import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import AboutUs from './pages/AboutUs'
import Pricing from './pages/Pricing'
import Courses from './pages/Courses'
import First from './pages/First'
import Contact from './pages/Contact'

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp />}/>
      <Route path="/about" element={<AboutUs />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path= "/first" element = {<First />}/>
      <Route path= "/contact" element = {<Contact />}/> 
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
