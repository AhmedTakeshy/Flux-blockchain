import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const clickHandler = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="w-full h-[90px] bg-black ">
      <div className=" max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <h1 className="text-green tracking-widest pointer-events-none">FLUX</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center text-white ">
            <li><a href="#platform">Platform</a></li>
            <li>Developers</li>
            <li>Community</li>
            <li><a href="#about">About</a></li>
            <button className="ml-4 text-black">Use Flux</button>
          </ul>
        </div>
        {/* Hamburger Menu */}
        <div className="block md:hidden" onClick={clickHandler}>
          {showMenu ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        {/* Mobile Menu */}
        {showMenu && (
          <div className="w-full bg-black absolute z-10 text-white top-[90px] left-0 h-screen flex text-center justify-center">
            <ul>
              <li className="text-2xl"><a href="#platform">Platform</a></li>
              <li className="text-2xl">Developers</li>
              <li className="text-2xl">Community</li>
              <li className="text-2xl">About</li>
              <button className="m-8 px-8">Use Flux</button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
