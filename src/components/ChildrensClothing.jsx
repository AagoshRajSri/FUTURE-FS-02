import { React, useState } from "react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Cartoon T-Shirt",
    price: "₹599",
    image:
      "https://www.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=med-s3/d-i-o/Tshirts/Kids/tshirt_kid_HS_pat_d76_o.jpg&resizeTo=600",
  },
  {
    id: 2,
    name: "Kids Denim Overalls",
    price: "₹999",
    image:
      "https://assets.digitalcontent.marksandspencer.app/image/upload/w_396,q_auto,f_auto,e_sharpen/779_Sec-01",
  },
  {
    id: 3,
    name: "Printed Frock",
    price: "₹899",
    image:
      "https://assets.panashindia.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/6/364kw04-3004.jpg",
  },
  {
    id: 4,
    name: "Superhero Hoodie",
    price: "₹1,199",
    image:
      "https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dwd496a31c/images/hi-res/502.180433_50207_00_HR.jpg?sw=1920",
  },
  {
    id: 5,
    name: "Cotton Shorts",
    price: "₹499",
    image:
      "https://cdn16.nnnow.com/web-images/large/styles/F22MY0VJ2AA/1745498068362/4.jpg",
  },
  {
    id: 6,
    name: "Girl’s Party Dress",
    price: "₹1,499",
    image:
      "https://i.etsystatic.com/32930538/r/il/223dbd/4993262165/il_570xN.4993262165_1vtj.jpg",
  },
  {
    id: 7,
    name: "Graphic Tee Pack (3)",
    price: "₹1,199",
    image:
      "https://www.jiomart.com/images/product/original/rvpp4soxw6/little-zing-girls-multicolor-pure-cotton-graphic-print-pack-of-3-t-shirt-7-8-years-product-images-rvpp4soxw6-0-202211260854.jpg?im=Resize=(500,630)",
  },
  {
    id: 8,
    name: "Boys’ Track Pants",
    price: "₹799",
    image:
      "https://www.jiomart.com/images/product/original/rvtx7j47qb/basis-stripes-boys-black-track-pants-product-images-rvtx7j47qb-2-202309151240.jpg?im=Resize=(500,630)",
  },
  {
    id: 9,
    name: "Toddler Onesie",
    price: "₹699",
    image:
      "https://cdn.shopify.com/s/files/1/0598/0667/9226/files/SleepOnesie_2.5T_Dragonflies_Infant_Sitting_1688x2000_104b8a0b-5bbb-42e8-aacc-a70c0ae5a6ac.webp?v=1713860376",
  },
  {
    id: 10,
    name: "Sweater Set",
    price: "₹1,299",
    image:
      "https://lowlandkids.com/cdn/shop/products/kids-set-in-sweater-897676.jpg?v=1673629299&width=480",
  },
  {
    id: 11,
    name: "Printed Pajamas",
    price: "₹699",
    image:
      "https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77087928_52_D5.jpg?imwidth=2048&imdensity=1&ts=1726742035547",
  },
  {
    id: 12,
    name: "Raincoat & Boots Combo",
    price: "₹1,499",
    image:
      "https://hatley.com/cdn/shop/files/pdp_zoom_45cf105d-293a-4a15-b54d-6c52b1a06dbf.jpg",
  },
];

export default function ChildrensClothing() {
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
      <h1 className="text-4xl font-bold mb-6 text-center">
        Children’s Clothing
      </h1>

      {/* 🔍 Search Input */}
      <div className="mb-6 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search children's clothing..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
        />
      </div>

      {/* Product Grid */}
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
