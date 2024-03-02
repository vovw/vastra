'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="py-8 text-lg">
      <div className="flex justify-center md:hidden">
        <button onClick={() => setIsOpen((prev) => !prev)} className="text-4xl">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      <div className={`${isOpen ? 'flex' : 'hidden'} flex-col items-center md:flex md:flex-row md:justify-center space-x-0 md:space-x-4`} style={{ transition: 'height 1s ease-in-out' }}>
        <Link href="/" legacyBehavior>
            <a className="underline hover:transform hover:scale-110 transition duration-300 font-lg">Home</a>
        </Link>
        {/* <Link href="/alumni" legacyBehavior>
          <a className="underline hover:transform hover:scale-110 transition duration-300 font-lg">Alumni</a>
        </Link> */}
        <Link href="/sponsors" legacyBehavior>
          <a className="underline hover:transform hover:scale-110 transition duration-300 font-lg">Sponsors</a>
        </Link>
        <Link href="/events" legacyBehavior>
          <a className="underline hover:transform hover:scale-110 transition duration-300 font-lg">Events</a>
        </Link>
        <Link href="/gallery" legacyBehavior>
          <a className="underline hover:transform hover:scale-110 transition duration-300 font-lg">Gallery</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="underline hover:transform hover:scale-110 transition duration-300 font-lg">Contact</a>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;