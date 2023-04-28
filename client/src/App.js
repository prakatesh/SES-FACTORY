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
import FeedBack from './components/Admin/Views/FeedBack/FeedBack'
import StarchView from './components/Admin/Views/ProductRequest/Starch/StarchView'
import SagoView from './components/Admin/Views/ProductRequest/Sago/SagoView'
import ThappiView from './components/Admin/Views/ProductRequest/Thappi/ThappiView'
import Manageside1 from './components/Admin/Management/manageside1'
// import Mainside from './components/Admin/Management/Main/MainSite'
import MainData from './components/Admin/Management/Main/mainData'
import RemoveStock from './components/Admin/Management/removeStock'
import SoldOut from './components/Admin/Views/SoldProduct/Soldview'


export default function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/flipbook" element={<Flipbook/>}></Route>
    <Route path="/product" element={<Products/>}></Route>
    <Route path='/product/starch' element={<Product1Order/>}/>
    <Route path='/product/sago' element={<Product2Order/>}/>
    <Route path='/product/thappi' element={<Product3Order/>}/>
    <Route path='/admin/signup' element={<Signup/>}></Route>
    <Route path='/admin/login' element={<Login/>}></Route>
    <Route path="/dashboard" element={<ResponsiveDrawer/>}></Route>
    <Route path="/admin/manage" element={<Manageside1/>}></Route>
    <Route path="/admin/main" element={<MainData/>}></Route>
    <Route path='/admin/view/feedback' element={<FeedBack/>}></Route>
    <Route path='/admin/view/starch' element={<StarchView/>}></Route>
    <Route path='/admin/view/sago' element={<SagoView/>}></Route>
    <Route path='/admin/view/thappi' element={<ThappiView/>}></Route>
    <Route path='/admin/sale' element={<RemoveStock/>}></Route>
    <Route path='/admin/view/soldout' element={<SoldOut/>}></Route>  
    </Routes>
    </div>
  )
}
