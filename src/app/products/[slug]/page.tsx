"use client"

import React from "react";
import Image from "next/image";
import featuredImage from "../../../../public/productone.png";
import mainImage from "../../../../public/productone.png";
import Wrapper from "@/app/components/Wrapper";
import {BiMinus} from "react-icons/bi"
import {BsPlusLg} from "react-icons/bs"

const Product = () => {
  
  return (
    <Wrapper>
      <h1 className="flex justify-center py-6 max-w-screen mx-auto text-4xl font-bold">Product Details</h1>
      <div className="py-16 block">
        <div className="flex justify-between">
          <div className="flex flex-grow flex-shrink gap-8">
            <div className="flex flex-col gap-4">
              <Image src={featuredImage} alt="" width={150} height={150} className="small-image" />
            </div>
            <div className="block">
              <Image src={mainImage} width={650} height={400} alt="" />
            </div>
          </div>
          <div className="flex flex-col flex-grow gap-10 mt-16">
            <div className="block mx-6">
              <h3 className="font-normal text-3xl leading-8 tracking-wider">Brushed Raglan Sweatshirt</h3>
              <span className="font-semibold text-xl opacity-30">Sweater</span>
            </div>
            <div className="block font-bold mx-6 text-base tracking-wider ">
              <p>SELECT SIZE</p>
              <ul className="flex mt-4 gap-4">
                <li className="w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider hover:border">XS</li>
                <li className="w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider hover:border">S</li>
                <li className="w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider hover:border">M</li>
                <li className="w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider hover:border">L</li>
                <li className="w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider hover:border">XL</li>
              </ul>
            </div>
            <div className="flex gap-8 mx-6 ">
              <h4 className="font-bold text-lg">Quantity: </h4>
              <div className="flex justify-center items-center  cursor-pointer rounded-[50%] gap-4">
                <span className="mr-2.5 border-2 bg-[#f1f1f1] border-[#f1f1f1] ">
                <BiMinus />
                </span>
                <span className="num" >1</span>
                <span className="mr-2.5 border-2 bg-[#f1f1f1] border-[#f1f1f1] ">
                  <BsPlusLg />
                </span>
              </div>
            </div>
            <div className="flex items-center mx-6">
              <button className="flex text-sm w-[40%] font-semibold leading-5 bg-[#212121] p-2.5 justify-center items-center gap-2 text-[#fff]" type="button">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Add to Cart
              </button>
              <p className="font-bold text-2xl leading-8 tracking-widest text-[#212121] pl-4">$195.00</p>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] flex flex-col mt-16 pt-8 px-16 pb-24">
          <div className="flex border-b-2 border-[#c4c4c4] border-solid w-[100%] h-[150px] relative">
            <div className="flex absolute -z- font-extrabold text-9xl leading-[151px] text-[#f2f3f7] opacity-70 w-[100%] h-[100%] -mt-8">Overview</div>
            <h2 className="relative font-bold text-2xl leading-6 tracking-wider top-11">Product Information</h2>
          </div>
          
          <div className="flex text-justify my-16 relative">
            <h4 className="font-bold z-10 absolute" >PRODUCT DETAILS</h4>
            <p className="flex ml-72 text-[#212121]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex">
            <h4 className="font-bold">PRODUCT CARE</h4>
            <ul className="ml-44 list-disc font-bold">
              <li>Hand wash using cold water.</li>
              <li>Do not using bleach.</li>
              <li>Hang it to dry.</li>
              <li>Iron on low temperature.</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Product;
