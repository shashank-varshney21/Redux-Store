const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white">REDUX STORE</h2>
            <p className="text-sm">Your one‑stop shop for amazing products.</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="/" className="hover:text-indigo-400">Home</a></li>
              <li><a href="/cart" className="hover:text-indigo-400">Cart</a></li>
              <li><a href="/about" className="hover:text-indigo-400">About</a></li>
              <li><a href="/contact" className="hover:text-indigo-400">Contact</a></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-indigo-400">🐦</a>
              <a href="#" className="hover:text-indigo-400">📘</a>
              <a href="#" className="hover:text-indigo-400">📸</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 text-center text-sm text-gray-400 py-2">
          © {new Date().getFullYear()} REDUX STORE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;