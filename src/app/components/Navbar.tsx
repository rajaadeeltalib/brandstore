import Image from "next/image";
import React from "react";
import Logo from "../../../public/Logo.webp";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import Wrapper from "./Wrapper";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row justify-between items-center py-[32px]">
        <div className="mb-4 md:mb-0">
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex gap-10 mb-4 md:mb-0">
          <Link href="/female">Female</Link>
          <Link href="/male">Male</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/products">All Products</Link>
        </div>

        <div className="flex items-center gap-2">
          <BsSearch />
          <input
            className="border border-gray-500 w-full md:w-[300px] h-7 rounded-md"
            type="text"
            placeholder="What you looking for"
          />
        </div>
        <div className="flex justify-between">
          {/* whishlist started */}
          <div className="flex items-center gap-2 text-black">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg/[0.05] cursor-pointer relative">
              <AiOutlineHeart className="text-[15px] md:text-[20px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                0
              </div>
            </div>
          </div>
          {/* whishlist end */}
          {/* cart started */}
          <Link href={"/cart"}>
          <div className="flex items-center gap-2 text-black">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg/[0.05] cursor-pointer relative">
              <BiCart className="text-[15px] md:text-[20px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                0
              </div>
            </div>
          </div>
          </Link>
        </div>
        {/* cart end */}
      </div>
    </Wrapper>
  );
};

export default Navbar;
