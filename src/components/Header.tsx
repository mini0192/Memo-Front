
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white h-[50px] flex items-center fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-[16px] text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="/memo" className="text-[16px] text-gray-600 hover:text-gray-800">
                Memo
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[16px] text-gray-600 hover:text-gray-800">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-[16px] text-gray-600 hover:text-gray-800">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[16px] text-gray-600 hover:text-gray-800">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
