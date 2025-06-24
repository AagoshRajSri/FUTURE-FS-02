import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const NavbarLinks = [
    { id: 1, name: "Men", path: "/men" },
    { id: 2, name: "Women", path: "/women" },
    { id: 3, name: "Children", path: "/children" },
    { id: 4, name: "Shopping Cart", path: "/cart" },
  ];

  return (
    <header className="relative font-mono top-0 left-0 w-full z-20 px-5 text-white bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between p-5">
        <Link
          to="/"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
        >
          <span className="text-blue-500">Trend</span>ora
        </Link>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>

        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.map((item, index) =>
            index === 3 ? (
              <button
                key={item.id}
                className="ml-10 px-5 py-2 bg-blue-500 text-white rounded-md text-xl font-medium hover:bg-white hover:text-blue-500 transition duration-300"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.id}
                to={item.path}
                className="relative text-xl capitalize font-light text-white
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[1px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden px-5 pb-4 space-y-4 flex flex-col bg-black/90">
          {NavbarLinks.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-lg capitalize font-light text-white border-b border-white/20 pb-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
      <hr />
    </header>
  );
}
