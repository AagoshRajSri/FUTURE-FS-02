import { React, useState } from "react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: "₹1,499",
    image:
      "https://roolee.com/cdn/shop/products/7W4A5528_ce972082-00f0-47c1-8f5b-a1ca884fe337.jpg?v=1652826335",
  },
  {
    id: 2,
    name: "Boho Maxi Dress",
    price: "₹2,099",
    image:
      "https://littlewish.in/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-06-at-2.54.57-PM.jpeg",
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    price: "₹399",
    image:
      "https://www.jiomart.com/images/product/original/rv1esuwfio/fabflee-stylish-cotton-printed-round-neck-tees-for-women-women-s-t-shirt-tshirt-for-women-womens-tshirt-tee-tshirt-casual-tshirt-regular-wear-tshirt-for-women-product-images-rv1esuwfio-0-202310132356.jpg?im=Resize=(330,410)",
  },
  {
    id: 4,
    name: "High-Waist Jeans",
    price: "₹1,299",
    image: "https://m.media-amazon.com/images/I/81DTZcG8VYL._UY1100_.jpg",
  },
  {
    id: 5,
    name: "Formal Blouse",
    price: "₹1,099",
    image:
      "https://raassio.com/cdn/shop/files/FORMAL_BLOUSE_FOR_WORK_GREEN_7_b8038e3c-a1aa-4b86-8c55-081d5557545a_800x.jpg?v=1727700711",
  },
  {
    id: 6,
    name: "Chic Jumpsuit",
    price: "₹2,799",
    image:
      "https://www.mills-melbourne.com/cdn/shop/files/bayla-jumpsuit-or-elegante-jumpsuit-met-capemouwen-carla-moda-4_2048x.jpg?v=1724362509",
  },
  {
    id: 7,
    name: "Knitted Sweater",
    price: "₹1,499",
    image:
      "https://media.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/max-new/1000014219455-Beige-BEIGE-1000014219455_01-2100.jpg",
  },
  {
    id: 8,
    name: "Oversized Hoodie",
    price: "₹1,299",
    image:
      "https://images.bewakoof.com/t540/women-s-grey-black-one-piece-typography-oversized-hoodies-641003-1736775816-1.jpg",
  },
  {
    id: 9,
    name: "Casual Blazer",
    price: "₹2,499",
    image:
      "https://imagescdn.allensolly.com/img/app/product/3/39628993-13007272.jpg?auto=format&w=390",
  },
  {
    id: 10,
    name: "Denim Skirt",
    price: "₹899",
    image:
      "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2025/APRIL/22/Cte4qWvB_23df2c50d6ba4e508c0f92a0da03a3ba.jpg",
  },
  {
    id: 11,
    name: "Printed Kurti",
    price: "₹1,099",
    image:
      "https://sootisyahi.com/cdn/shop/products/sootisyahi-blushing-betel-bagru-handblock-printed-pure-cotton-kurti-887969.jpg?v=1649271406&width=2048",
  },
  {
    id: 12,
    name: "Linen Trousers",
    price: "₹1,299",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20241021/GY5p/67158255f9b8ef490bcd5f69/-473Wx593H-466681525-brown-MODEL.jpg",
  },
];

export default function WomensClothing() {
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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Women’s Clothing</h1>

      {/* 🔍 Search bar */}
      <div className="mb-6 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search women’s clothing..."
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
