import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Flipbook from './components/Flipbook/flipbook'
import Products from './components/Product/products'
import Productorder1 from './components/Product/Productorder1'
export default function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/flipbook" element={<Flipbook/>}></Route>
    <Route path="/product" element={<Products/>}></Route>
    <Route path='/p' element={<Productorder1/>}></Route>
    </Routes>
    </div>
  )
}
