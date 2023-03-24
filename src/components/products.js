import React from 'react'
import List from './List'
import ProductList from './ProductList'
function Product() {
  return (
    <div>
      <ProductList data={List} />
    </div>
  )
}

export default Product