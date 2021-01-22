import itemRequest from 'apis/itemRequest'
import ProductItem from 'components/Product/ProductItem'
import FallbackTemp from 'components/_common/Loading/FallbackTemp'
import Separator from 'helpers/Separator'
import React, { useEffect, useState } from 'react'

const Product = () => {
  const [product, setProduct] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    itemRequest
      .get('/product')
      .then(response => {
        setProduct(response.data)
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)

        alert(err.response.data)
      })
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-10">
      {isLoading && <FallbackTemp display="block" />}
      {product.map(prod => (
        <div key={prod._id}>
          <ProductItem productInfo={prod} />
          <Separator height="20px" />
        </div>
      ))}
    </div>
  )
}

export default Product
