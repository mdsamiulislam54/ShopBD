import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Container from '../Container/Container';

const Footer = () => {
  return (
    <footer className="bg-base-100 text-black py-12">
      <Container>

     
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Shop<span className="text-rose-600">BD</span></h2>
            <p className="text-sm mt-2">Your one-stop shop for the best deals online</p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link href="#" className="text-2xl hover:text-rose-500"><FaFacebook /></Link>
            <Link href="#" className="text-2xl hover:text-rose-500"><FaTwitter /></Link>
            <Link href="#" className="text-2xl hover:text-rose-500"><FaInstagram /></Link>
            <Link href="#" className="text-2xl hover:text-rose-500"><FaLinkedin /></Link>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-400">
          <p>&copy; 2025 ShopBD. All Rights Reserved.</p>
        </div>
      </div>
       </Container>
    </footer>
  );
};

export default Footer;
