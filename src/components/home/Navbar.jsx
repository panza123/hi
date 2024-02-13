import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function handleClick() {
    setNav(!nav);
  }

  // Close navbar when a link is clicked
  function closeNavbar() {
    setNav(false);
  }

  return (
    <header className="w-full h-[50px] bg-transparent m-auto absolute top-0">
      <nav className="w-full max-w-[1240px] flex justify-between text-white px-5 py-1 md:px-0 items-center">
        <h1 className="text-xl pl-3 md:3xl ">Helio</h1>
        <div className="flex gap-1 items-center text-white cursor-pointer">
          <div onClick={handleClick}>
            {!nav ? <AiOutlineMenu size={26} /> : <AiOutlineClose size={26} />}
          </div>
          <p className={nav ? "hidden" : "block"}>Menu</p>
        </div>
      </nav>
      <section
        className={
          nav
            ? "w-[300px] pt-5 h-screen bg-black absolute top-0 right-0  ease-in-out duration-500   scroll-behavior:smooth lg:w-[500px] max-sm:w-[250px]"
            : " absolute  right-[-100%] hidden   "
        }
      >
        <AiOutlineClose
          className="text-gray-400 cursor-pointer hover:text-gray-50"
          style={{ position: "absolute", right: "10px" }}
          size={26}
          onClick={handleClick}
        />
        <ul className="max-w-[1200px] flex flex-col text-gray-500 text-3xl gap-3  pt-9 px-4">
          <li className="hover:text-gray-100">
            <Link to="/" onClick={closeNavbar}>
              Home
            </Link>
          </li>
          <hr className="border-solid border-gray-700" />
          <li className="hover:text-gray-100">
            <Link to="/elements" onClick={closeNavbar}>
              Elements
            </Link>
          </li>
          <hr className="border-solid border-gray-700" />
          <li className="hover:text-gray-100">
            <Link to="/generic" onClick={closeNavbar}>
              Generic
            </Link>
          </li>
        </ul>
      </section>
    </header>
  );
}
