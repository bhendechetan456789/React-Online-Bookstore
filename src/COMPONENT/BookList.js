import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book'; // Import the Book component
import SearchBar from './SearchBar'; // Import the SearchBar component

function BookList({ addToCart }) { // Pass addToCart as a prop
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=javascript');
        const booksWithPrice = response.data.items.map(book => ({
          id: book.id,
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author',
          genre: book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : 'Unknown Genre',
          description: book.volumeInfo.description || 'No description available',
          coverImage: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '',
          price: book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 'Price not available'
        }));
        setBooks(booksWithPrice);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBooks();
  }, []);

  // Function to handle search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredBooks = books.filter(book => {
      const searchString = `${book.title.toLowerCase()} ${book.author.toLowerCase()} ${book.genre.toLowerCase()}`;
      return searchString.includes(query.toLowerCase());
    });
    setSearchResults(filteredBooks);
  };

  return (
    <div>
      <h2>Book List</h2>
      <SearchBar handleSearch={handleSearch} /> {/* Pass handleSearch function as prop */}
      <div className="book-list">
        {(searchQuery ? searchResults : books).map(book => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            description={book.description}
            coverImage={book.coverImage}
            price={book.price} // Pass the price as a prop to the Book component
            addToCart={() => {
              addToCart(book); // Call addToCart function and pass the book
              console.log(`Book '${book.title}' added to cart.`); // Log message
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;
