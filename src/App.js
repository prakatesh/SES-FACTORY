import React from 'react'
import Navb from './components/navbar'
import { Routes,Route} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Flipbook from './components/flipbook'
import Products from './components/products'
export default function App() {
  return (
    <div>
    <Navb/>
   <Routes>
   <Route path="/" element={<Home/>}></Route>
   <Route path="about" element={<About/>}></Route>
   <Route path="contact" element={<Contact/>}></Route>
   <Route path="flipbook" element={<Flipbook/>}></Route>
   <Route path="product1" element={<Products/>}></Route>
   <Route path="product2" element={<Products/>}></Route>
   <Route path="product3" element={<Products/>}></Route>
   </Routes>
    </div>
  )
}
