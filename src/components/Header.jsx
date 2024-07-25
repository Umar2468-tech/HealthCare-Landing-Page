import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const list = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Gallery",
    },
    {
      id: 4,
      text: "Services",
    },
  ];
  return (
    <div>
      <div className="bg-[#F6F0F0] p-2">
        <div className="max-w-screen-xl  flex justify-between items-center mx-auto">
          <h1 className="text-[25px] text-[#005CFE] ">Medicare</h1>
          <ul className="hidden lg:flex gap-10">
            {list.map((item) => (
              <li className="hover:scale-110 duration-300 cursor-pointer hover:text-[#005CFE]">
                {item.text}
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center">
            <button className="mr-11 px-5 py-2 rounded-full border-[#005CFE] border-2 flex items-center">
              <MdOutlineShoppingCart className="text-[#005CFE] mr-2" />
              Cart
            </button>
            <button className=" px-5 py-2 rounded-full bg-[#005CFE] border-2 flex items-center text-white">
              <IoMdPerson className="text-white mr-2" />
              Login
            </button>
          </div>
          {toggle ? (
            <IoMdClose
              size={30}
              className=" flex lg:hidden"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <MdMenuOpen
              size={28}
              className="flex lg:hidden"
              onClick={() => setToggle(!toggle)}
            />
          )}

          <ul
            className={`fixed left-0 top-[54px] bg-black rounded-tr-lg rounded-br duration-1000 text-white h-[300px] w-[200px] p-4 space-y-10
            ${toggle ? "left-[0%]" : "left-[-100%]"}
            `}
          >
            {list.map((item) => (
              <li className="p-2 hover:scale-110 duration-300 cursor-pointer">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
