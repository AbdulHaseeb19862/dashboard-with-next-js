"use client";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

const Header = ({ open, setOpen }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      <div className="w-full h-20 flex justify-between items-center gap-5 pr-8">
        <div className="px-5 py-3 cursor-pointer shadow-md shadow-gray-300">
          <CiMenuBurger className="text-3xl" onClick={handleOpen} />
        </div>
        <div className="w-full flex items-center gap-2">
          <IoIosSearch className="text-2xl" onClick={handleSearchOpen} />
          <input
            type="text"
            placeholder="Type to search......"
            className={`w-full h-12 border-none outline-none placeholder:text-xl placeholder:text-gray-700  ${
              searchOpen ? "block" : "hidden"
            } md:block`}
          />
        </div>
        <div className="flex items-center gap-3">
          <img
            src="https://t4.ftcdn.net/jpg/03/78/43/25/360_F_378432516_6IlKiCLDAqSCGcfc6o8VqWhND51XqfFm.jpg"
            alt="Men picture"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-sm text-gray-700">User Name</span>
        </div>
      </div>
    </>
  );
};

export default Header;
