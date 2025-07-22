import React from 'react'
import Container from '@/app/components/Container/Container'
import Link from 'next/link'
import { FaCartShopping } from 'react-icons/fa6'
const Header = () => {
  return (
    <header>
        <Container>
            <div className='flex' >
                <h1 className="text-2xl font-bold">E-Commerce Header</h1>
                <nav className="mt-4">
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="text-blue-500 hover:underline">Home</Link></li>
                        <li><Link href="/products" className="text-blue-500 hover:underline">Products</Link></li>
                        <li><Link href="/about" className="text-blue-500 hover:underline">About</Link></li>
                        <li><Link href="/contact" className="text-blue-500 hover:underline">Contact</Link></li>
                    </ul>
                </nav>
                <div>
                    <input type="text" placeholder="Search..." className="border p-2 rounded mt-4 w-full" />
                    <FaCartShopping className=''/>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header