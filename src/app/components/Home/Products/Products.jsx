
// import React, { useState } from 'react'
import Container from '../../Container/Container'
import Image from 'next/image'
import Link from 'next/link'

const  Products = async () => {
  // const [products, setProducts] = useState([])
  // const featchData = async () => {
  //   const res = await fetch('https://fakestoreapi.com/products?limit=10')
  //   const data = await res.json()
  //   console.log(data)
  //   setProducts(data)
  // }
  // React.useEffect(() => {
  //   featchData()
  // }, [])

  const res = await fetch('https://fakestoreapi.com/products?limit=10')
  const products = await res.json()
  console.log(products)
  return (
    <div className='bg-gray-100 py-10'>
      <Container>
        <h1 className='text-3xl font-bold text-center my-8'>Our Products</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.map(product => (
            <div key={product.id} className='bg-white p-4 rounded-lg shadow-md'>
              <div className='relative w-full h-[100px]'>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className='object-contain'
                />
              </div>

              <h2 className='text-xl font-semibold mb-2'>{product.title.split(' ').slice(0,2).join(' ')}</h2>
              <p className='text-gray-600 mb-4'>${product.price}</p>
              <Link href={`/products/${product.id}`} className='bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition duration-300 w-full mt-auto'>
               Checkout
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Products
