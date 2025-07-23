import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="text-2xl font-bold text-indigo-600 tracking-wide">
            <Link to="/">REDUX STORE</Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/cart"
              className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-200"
            >
              Cart
            </Link>
          </div>

          {/* Cart Count */}
          <div className="hidden sm:flex items-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700">
              🛒 {items.length} items
            </span>
          </div>

          {/* Hamburger Button (mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            {/* Icon */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                // X icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
          >
            Cart
          </Link>
          <span className="block px-3 py-2 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-md">
            🛒 {items.length} items
          </span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
