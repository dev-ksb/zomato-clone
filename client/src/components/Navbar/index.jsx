import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

function MobileNav() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [user, setUser] = useState({
    fullName: "Kuldeep Singh",
  });

  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
          Use App
        </button>
        {user?.fullName ? (
          <>
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 text-zomato-400 w-16 h-16 rounded-full"
            >
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oXFrcLVorWTEUr45MTQeHwAAAA%26pid%3DApi&f=1"
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <button>Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-300 text-zomato-400 rounded-full"
            >
              <FaUserAlt className="w-full h-full" />
            </span>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                <button>Sign In</button>
                <button>Sign Out</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function LargeNav() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [user, setUser] = useState({
    fullName: "",
  });

  const [isArrowDropDown, setIsArrowDropDown] = useState(true);

  return (
    <>
      <div className="hidden lg:inline container px-20 mx-auto">
        <div className="gap-4 w-full items-center justify-around flex">
          <div className="w-16">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-zomato-400">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Delhi NCR"
                className="focus:outline-none"
                onBlur={() => setIsArrowDropDown(true)}
                onFocus={() => setIsArrowDropDown(false)}
              />

              <IoMdArrowDropdown
                className={`cursor-pointer ${
                  !isArrowDropDown
                    ? "transition rotate-180 transform duration-700 ease-in-out"
                    : "transition rotate-0 transform duration-700 ease-in-out"
                }`}
              />
            </div>
            <div className="flex w-full items-center gap-2">
              <RiSearch2Line />
              <input
                type="search"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          {user?.fullName ? (
            <div className="relative w-20">
              <div
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border border-gray-300 text-zomato-400 w-full h-20 rounded-full"
              >
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oXFrcLVorWTEUr45MTQeHwAAAA%26pid%3DApi&f=1"
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {isDropDownOpen && (
                <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                  <button>Sign Out</button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4">
              <button className="text-gray-500 text-xl hover:text-gray-800">
                Login
              </button>
              <button className="text-gray-500 text-xl hover:text-gray-800">
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const Navbar = () => {
  return (
    <>
      <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
        <MobileNav />
        <LargeNav />
      </nav>
    </>
  );
};

export default Navbar;
