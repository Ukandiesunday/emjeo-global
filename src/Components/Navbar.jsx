import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#A93226] h-[80px] w-full text-[17px] text-white font-bold">
      <div className="flex justify-between space-x-7 items-center py-[30px] px-[40px] ">
        <Link href={"/"}>
          Emjo<span className="text-blue-700">Global</span>
        </Link>
        <ul className="space-x-7">
          <Link href={"/"}>Services</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
