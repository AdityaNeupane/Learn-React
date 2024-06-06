import Navbar from './Components/Navbar'
import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Services from './Pages/Services'
import ContactUs from './Pages/ContactUs'
import { Route, Routes } from 'react-router-dom'

function App() {
   

  return (
    <>
       <Navbar/>
       
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<AboutUs />}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<ContactUs />}/>
     </Routes>


    </>
  )
}

export default App
