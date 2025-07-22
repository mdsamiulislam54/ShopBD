import React from 'react'
import Container from '@/app/components/Container/Container'
const page = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const product = await res.json()
  console.log(product)
  const { id } = params
  return (
    <div>
     <Container>
      <div className='flex justify-between items-center p-4 gap-5'>
        <div className='w-1/2 mx-auto'>
          <img
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className=' mx-auto object-cover'
          />
        </div>
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>

          <p>Category: {product.category}</p>
          <p>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <p>Product ID: {product.id}</p>
          <p>Product Details: {product.details}</p>
          <p>Product Image: {product.image}</p>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default page
