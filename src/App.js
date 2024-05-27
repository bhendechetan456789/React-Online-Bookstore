import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookList from './COMPONENT/BookList';
import ShoppingCart from './COMPONENT/ShoppingCart';
import CheckOut from './COMPONENT/CheckOut';
import Book from './COMPONENT/Book';
import Login from './COMPONENT/Login';
import { AuthProvider } from './authContext';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === book.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const proceedToCheckout = () => {
    console.log('Proceeding to checkout with items:', cartItems);
  };

  return (
    <AuthProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cartItems.length})</Link>
          <Login />
        </nav>
        <Routes>
          <Route path="/" element={<BookList addToCart={addToCart} />} />
          <Route path="/book/:id" element={<Book addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                proceedToCheckout={proceedToCheckout}
              />
            }
          />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
