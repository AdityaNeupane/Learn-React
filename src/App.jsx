import Navbar from './Components/Navbar'
import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Services from './Pages/Services'
import ContactUs from './Pages/ContactUs'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound'
import { SignUp } from './Pages/SignUp'

function App() {
   

  return (
    <>
       <Navbar/>
       
     <Routes>
      <Route path='/' element={<SignUp />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<AboutUs />}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<ContactUs />}/>
      <Route path='*' element={<PageNotFound />}/>
     </Routes>


    </>
  )
}

export default App
