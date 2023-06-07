// import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "@/app/components/Wrapper";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

import { client } from "../../../lib/sanityClient";

import { urlForImage } from "../../../../sanity/lib/image";
import ProductCard from "@/app/components/ProductCard";
import { useState } from "react";
import Quantity from "@/app/components/Quantity";

async function getSingleProducts(Slug: any) {
  const res = await client.fetch(
    `*[_type=='product' && Slug.current == '${Slug.params.product}']`
  );

  // Recommendation: handle errors
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  return res;
}

const Product = async (Slug: any) => {  
  
  const d = await getSingleProducts(Slug);  
  
  console.log("DDD", d);

  

  return (
    <Wrapper>
      <h1 className="flex justify-center py-6 max-w-screen mx-auto text-4xl font-bold">
        Product Details
      </h1>
      <div className="sm:py-16 2xl:px-32 xl:px-24 md:px-16 px-16">
        <div className="flex lg:flex-row flex-col gap-4">
          <div className="flex flex-[2_1] max-w-screen-lg gap-8">
            <div className="flex flex-col gap-4">
              <Image
                src={urlForImage(d[0].image).url()}
                alt="Small Image"
                width={150}
                height={150}
                className=""
              />
            </div>
            <div className="w-full">
              <Image
                src={urlForImage(d[0].image).url()}
                width={650}
                height={400}
                alt="Big Image"
              />
            </div>
          </div>
          <div className="flex-1 max-w-lg">
            <div className="flex flex-col gap-7 w-fit py-14 md:mx-14">
              <h3 className="font-normal text-3xl leading-8 tracking-wider">
                {d[0].title}
              </h3>
              <span className="font-semibold text-xl opacity-30">
                {d[0].subcategory}
              </span>
            </div>
            <div className="font-bold mb-2 md:mx-14">
              <p>SELECT SIZE</p>
              <ul className="flex items-center gap-4 my-4">
                <li className="w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider hover:border">
                  XS
                </li>
                <li className="w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider hover:border">
                  S
                </li>
                <li className="w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider hover:border">
                  M
                </li>
                <li className="w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider hover:border">
                  L
                </li>
                <li className="w-10 h-10 flex justify-center items-center rounded-[50%] cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider hover:border">
                  XL
                </li>
              </ul>
            </div>

            {/* ....................... */}
            <Quantity />
            <div className="my-4 w-[450px] lg:w-80 md:mx-8 -mx-6">
              <ProductCard item={d} className="w-screen lg:w-80" />
            </div>
            <div>
              <p className="font-bold text-2xl leading-8 tracking-widest text-[#212121] md:mx-14 ">
                ${d[0].price}.00
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-8  sm:px-14 py-20">
          <div className="flex items-center border-b-2 border-[#c4c4c4] relative">
            <h3 className="absolute text-2xl font-semibold">
              Product Information
            </h3>
            <h1 className="text-[#f2f3f7] xl:text-[7rem] sm:text-8xl min-[410px]:text-7xl text-5xl leading-none font-black max-[310px]:mb-4">
              Overview
            </h1>
          </div>
          <div className="flex sm:flex-row flex-col max-sm:space-y-2 justify-between">
            <h3 className="text-[#666] flex-1 font-semibold">
              PRODUCT DETAILS
            </h3>
            <p className="flex-[2_1] font-light leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col max-sm:space-y-2 justify-between">
            <h3 className="text-[#666] flex-1 font-semibold">
              PRODUCT DETAILS
            </h3>
            <ul className="flex-[2_1] flex flex-col list-disc list-inside gap-1">
              <li className="font-semibold">Hand wash using cold water.</li>
              <li className="font-semibold">Do not using bleach.</li>
              <li className="font-semibold">Hang it to dry.</li>
              <li className="font-semibold">Iron on low temperature.</li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Product;
