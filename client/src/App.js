import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Flipbook from './components/Flipbook/flipbook'
import Products from './components/Product/products'
import Product1Order from './components/Product/Page/Product1Order';
import Product2Order from './components/Product/Page/Product2Order.js'
import Product3Order from './components/Product/Page/Product3Order'
import Signup from './components/Admin/SignUp/Signup'
import Login from './components/Admin/Login/Login'
import ResponsiveDrawer from './components/Admin/Slidebar/slidebar'
import StarchView from './components/Admin/Views/StarchView'
import FeedBack from './components/Admin/Views/FeedBack/FeedBack'
export default function App() {
  return (
    <div>
    <Routes>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/flipbook" element={<Flipbook/>}></Route>
    <Route path="/product" element={<Products/>}></Route>
    <Route path='/product/starch' element={<Product1Order/>}/>
    <Route path='/product/sago' element={<Product2Order/>}/>
    <Route path='/product/thappi' element={<Product3Order/>}/>
    <Route path='/admin/signup' element={<Signup/>}></Route>
    <Route path='/admin/login' element={<Login/>}></Route>
    <Route path="/" element={<ResponsiveDrawer/>}></Route>
    <Route path='/admin/view/feedback' element={<FeedBack/>}></Route>
    <Route path='/admin/view/starch' element={<StarchView/>}></Route>
    </Routes>
    </div>
  )
}
