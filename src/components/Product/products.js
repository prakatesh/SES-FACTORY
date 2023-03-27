import React from 'react'
import List from './List'
import ProductList from './ProductList'
import Navb from '../Navbar/navbar'
function Product() {
  return (
    <div>
      <Navb/>
      <ProductList data={List} />
    </div>
  )
}

export default Product