// Book.js
import React from 'react';

const Book = ({ title, author, genre, description, coverImage, addToCart }) => {
  const handleClick = () => {
    if (typeof addToCart === 'function') {
      addToCart();
      console.log(`Book '${title}' added to cart.`);
    } else {
      console.error(`addToCart is not a function in Book component for book '${title}'.`);
    }
  };

  return (
    <div className="book">
      <img src={coverImage} alt={title} />
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
      <p>{description}</p>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}

export default Book;
