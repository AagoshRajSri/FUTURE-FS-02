import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="bg-gray-900 min-h-screen text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-400 text-xl">
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-md object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">₹{item.price}</p>
                </div>
              </div>

              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value) || 1)
                    }
                    className="w-12 text-center rounded-md text-black"
                  />
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
                  >
                    +
                  </button>
                </div>

                <p className="text-lg font-medium">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-600 font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
            <p className="text-lg">
              Total: <span className="font-bold">₹{totalPrice}</span>
            </p>
            <button
              onClick={() => navigate("/checkout")}
              className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-lg font-medium transition duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
