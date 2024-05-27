import React, { useState } from 'react';

const CheckoutForm = ({ handleCheckout }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    payment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call handleCheckout function and pass form data
    handleCheckout(formData);
    // Optionally, you can reset the form fields after submission
    setFormData({
      name: '',
      email: '',
      address: '',
      payment: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="payment">Payment Method:</label>
        <select
          id="payment"
          name="payment"
          value={formData.payment}
          onChange={handleChange}
          required
        >
          <option value="">Select Payment Method</option>
          <option value="credit card">Credit Card</option>
          <option value="paypal">PayPal</option>
          {/* Add more payment options if needed */}
        </select>
      </div>
      <button type="submit">Proceed to Checkout</button>
    </form>
  );
};

export default CheckoutForm;
