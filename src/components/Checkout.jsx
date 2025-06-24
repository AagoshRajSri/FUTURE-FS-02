import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cartItems } = useCart();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const navigate = useNavigate();

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>

      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white outline-none"
            required
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white outline-none"
            rows="4"
            required
          />

          <div className="mt-6 text-lg">
            <span className="font-bold">Total:</span> ₹{totalPrice}
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-500 rounded text-white font-semibold"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
