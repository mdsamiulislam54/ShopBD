import React from "react";
import Container from "@/app/components/Container/Container";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <Container>
        <div className="flex justify-between items-center">
          <Link href={'/'} className="text-2xl font-bold">
            Shop<span className="text-rose-600 font-bold">BD</span>
          </Link>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-rose-500 hover:underline  text-lg font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-rose-500 hover:underline text-lg font-bold"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-rose-500 hover:underline text-lg font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-rose-500 hover:underline text-lg font-bold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-[400px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <span className="absolute text-center top-0 right-0 h-full flex items-center">
                <span className="bg-rose-500 h-full p-2 text-center rounded-r-md text-white">
                  <FaSearch />
                </span>
              </span>
            </div>

            <div className="relative flex items-center cursor-pointer">
                  <FaCartShopping className="ml-4 text-3xl text-rose-500" />
                  <span className="absolute -top-3 -right-2 text-xl font-bold">0</span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
