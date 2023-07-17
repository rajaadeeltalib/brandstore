"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/Logo.webp";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";


const Navbar = () => {

  

  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="relative flex items-center justify-between py-8 2xl:px-32 xl:px-24 md:px-16 px-8">
      <Link className="z-10" href="/">
        <Image src={Logo} alt="Logo" loading="lazy" width={135} height={23} />
      </Link>
      <ul className="flex text-lg gap-x-10 max-lg:hidden">
        <li>
          <Link href={"/female"}> Female</Link>
        </li>
        <li>
          <Link href={"/male"}>Male </Link>
        </li>
        <li>
          <Link href={"/kids"}> Kids </Link>
        </li>
        <li>
          <Link href={"/products"}>All Products </Link>
        </li>
      </ul>
      <div className="w-1/3 max-w-md flex items-center border rounded-md font-light overflow-hidden pl-2 max-lg:hidden">
        <BsSearch />
        <input
          className="grow placeholder-black text-[0.80rem] leading-none px-1 py-1.5"
          type="search"
          placeholder="What you looking for"
        ></input>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/cart"
          className="bg-slate-200 relative rounded-full hover:hover:scale-125 transition duration-700 ease-in-out p-3 max-lg:hidden"
        >
          <BiCart className="w-6 h-6" />
          <span className="flex items-center justify-center text-white text-xs w-4 h-4 bg-red-500 absolute right-0 top-0 rounded-full">
            0
          </span>
        </Link>
      </div>

      <span
        onClick={() => setShowMenu(!showMenu)}
        className="text-xl md:hidden w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
      >
        <FiMenu />
      </span>

      {showMenu && (
        <div className="h-72 overflow-hidden bg-white lg:hidden absolute z-10 top-16 left-0 right-0 transition-all duration-300">
          <ul className="flex flex-col items-center text-lg gap-y-6 py-6 lg:hidden">
            <div className="flex items-center gap-4">
              <Link
                href="/cart"
                className="bg-slate-200 relative rounded-full p-3 lg:hidden"
              >
                <BiCart className="w-6 h-6" />
                <span className="flex items-center justify-center text-white text-xs w-4 h-4 bg-red-500 absolute right-0 top-0 rounded-full">
                  0
                </span>
              </Link>
            </div>
            <li>
              <Link href={"/female"}> Female</Link>
            </li>
            <li>
              <Link href={"/male"}>Male </Link>
            </li>
            <li>
              <Link href={"/kids"}> Kids </Link>
            </li>
            <li>
              <Link href={"/products"}>All Products </Link>
            </li>
          </ul>
        </div>
      )}
      <span
        onClick={() => setShowMenu(false)}
        className="absolute top-4 right-4 hover:text-designColor duration-300 text-2xl cursor-pointer md:hidden"
      >
        <MdClose />
      </span>
    </header>
  );
};

export default Navbar;
