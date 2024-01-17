import react from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import Cart from './Cart'
import Error from './Error'
import Header from './Components/Header'
import Singleproduct from './Singleproduct'
import Footer from './Components/Footer'
export default function App(){
  return(
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Products" element={<Products/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path='/singleproduct/:id' element={<Singleproduct/>}></Route>
      <Route path='*' element={<Error/>}></Route>


    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}