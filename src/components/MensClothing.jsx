import { React, useState } from "react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: "₹2,499",
    image:
      "https://campussutra.com/cdn/shop/files/JKDENIMP02_M_PLN_NBU_1_80a9e6ee-5622-456b-82f5-a2fb3e18f9f8.jpg?v=1728974706",
  },
  {
    id: 2,
    name: "Slim Fit T-Shirt",
    price: "₹899",
    image:
      "https://jimmyluxury.in/cdn/shop/files/IMG_9359copy.jpg?v=1749016901",
  },
  {
    id: 3,
    name: "Casual Cotton Shirt",
    price: "₹1,299",
    image:
      "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/26409260/2023/12/14/ffabc734-72f8-4fa2-8e18-4b7a62870f631702494755932ModaRapidoMenGreenSlimFitStripedCasualShirt6.jpg",
  },
  {
    id: 4,
    name: "Formal Blazer",
    price: "₹3,999",
    image:
      "https://mrbutton.in/cdn/shop/files/Mrbutton-17-sep89004.jpg?v=1748422063",
  },
  {
    id: 5,
    name: "Athleisure Hoodie",
    price: "₹1,799",
    image:
      "https://www.shockdoctor.com/cdn/shop/products/SD_Athletic-ZipUp-Hoodie_2000x.jpg",
  },
  {
    id: 6,
    name: "Summer Shorts",
    price: "₹799",
    image:
      "https://i.pinimg.com/564x/8e/1c/27/8e1c27f562a66ed535dd2abcb6c8f128.jpg",
  },
  {
    id: 7,
    name: "Men's Vest",
    price: "₹299",
    image:
      "https://shop.teamsg.in/cdn/shop/files/1_34685408-c277-44c6-9893-8e19347eab4c.jpg?v=1725973448",
  },
  {
    id: 8,
    name: "Casual Shoes",
    price: "₹1799",
    image:
      "https://images-cdn.ubuy.co.in/680283e5e4c0be92410d2836-jjayotai-men-shoes-clearance-sale-mens.jpg",
  },
  {
    id: 9,
    name: "Formal Shoes",
    price: "₹2799",
    image:
      "https://paragonfootwear.com/cdn/shop/products/K11241G_BLK_P2.jpg?v=1741861030&width=1920",
  },
  {
    id: 10,
    name: "Cotton Sweatshirt",
    price: "₹1000",
    image: "https://m.media-amazon.com/images/I/41A+E+aI0TL._AC_UY1100_.jpg",
  },
  {
    id: 11,
    name: "Track Suit",
    price: "₹2500",
    image:
      "https://shop.teamsg.in/cdn/shop/files/1_7c3859f8-7df5-48b1-a615-fc622186e634.jpg?v=1726048309",
  },
  {
    id: 12,
    name: "Night Suit",
    price: "₹799",
    image:
      "https://www.hancockfashion.com/cdn/shop/products/15630d8b-a7b3-4686-b697-0f55fbf81d491650628648826-Hancock-Men-Olive-Green--White-Striped-Night-suit-6781650628-1.jpg?v=1734413276",
  },
  {
    id: 13,
    name: "Men's Lower",
    price: "₹399",
    image: "https://images.meesho.com/images/products/399299732/ejjzh_512.webp",
  },
];

export default function MensClothing() {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  // Filter products by search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Men’s Clothing</h1>

      {/* 🔍 Search bar */}
      <div className="mb-6 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
        />
      </div>

      {/* 🛍️ Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-blue-400 mb-4">{product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full px-4 py-2 ${
                    addedItems[product.id] ? "bg-green-600" : "bg-blue-500"
                  } text-white rounded-md hover:bg-blue-600 transition`}
                >
                  {addedItems[product.id] ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 text-xl">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
