import Navbar from './Components/Navbar'
import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Services from './Pages/Services'
import ContactUs from './Pages/ContactUs'
import Products from './Pages/Products'
import { Route, Routes } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound'
import { SignUp } from './Pages/SignUp'
import Tshirt from './Pages/Tshirt'
import Pant from './Pages/Pant'
import Userdetail from './Pages/Userdetail'
import Usestatehook from './Pages/Usestatehook'
import UseEffecthook from './Pages/UseEffecthook'
import UseStateObj from './Components/UseStateObj'
function App() {
   

  return (
    <>
       <Navbar/>
       
     <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/services' element={<Services/>}/>

      <Route path='/contact' element={<ContactUs/>}>
      <Route path='user/:id' element={<Userdetail/>}/>
      <Route path='user/:id' element={<Userdetail/>}/>
      <Route path='user/:id' element={<Userdetail/>}/>
      <Route path='user/:id' element={<Userdetail/>}/>
      <Route path='user/:id' element={<Userdetail/>}/>
      </Route>




      <Route path='/products' element={<Products/>}>
      <Route index element={<Tshirt/>}/>
      <Route path='tshirt' element={<Tshirt/>}/>
      <Route path='pant' element={<Pant/>}/>
      </Route>

      <Route path='*' element={<PageNotFound/>}/>
     </Routes>
     

     <br>
     </br>
     <br></br>
     <br></br>

     <Usestatehook/>

     <br></br>
     
     <UseEffecthook/>

     <br></br>

     <UseStateObj/>
    </>
  )
}
 

export default App
