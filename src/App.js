import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import store from './Store/store';
import Footer from './Components/Footer';

// I have used div here so that the footer is always at the bottom of the page, even if the content is short. This ensures a consistent layout across different pages.
// Main tag is used to apply flex-grow, allowing the main content to take up available space between the navbar and footer.
// Justify-between is used to space the navbar and footer evenly, while the main content fills the remaining space.

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col justify-between">
        <Router>
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
