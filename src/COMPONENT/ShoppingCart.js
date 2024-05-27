import React from 'react';

const ShoppingCart = ({ cartItems, removeFromCart, updateQuantity, proceedToCheckout }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <div>
              <img src={item.coverImage} alt={item.title} />
              <h3>{item.title}</h3>
              {item.price ? ( // Check if price exists
                <p>Price: ${item.price.toFixed(2)}</p> // Format price
              ) : (
                <p>Price: Unknown</p> // Display unknown if price is not available
              )}
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
              <input
                type="number"
                value={item.quantity}
                onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
              />
            </div>
          </li>
        ))}
      </ul>
      <button onClick={proceedToCheckout}>Proceed to Checkout</button> {/* Add button to proceed to checkout */}
    </div>
  );
}

export default ShoppingCart;
