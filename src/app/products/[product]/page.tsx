import React, { useState } from "react";
import Image from "next/image";
// import featuredImage from "../../../../public/productone.png";
// import mainImage from "../../../../public/productone.png";
import Wrapper from "@/app/components/Wrapper";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { client } from "../../../lib/sanityClient";
import { Image as IImage, Slug } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import ProductCard from "@/app/components/ProductCard";

async function getSingleProducts(Slug: any) {
  
  const res =
    await client.fetch(`*[_type=='product' && Slug.current == '${Slug.params.product}']`);

  // Recommendation: handle errors
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  return res;
}

const Product: any = async (Slug: any) => {
  const d = await getSingleProducts(Slug);
  console.log("DDD", d);

  return (
    <Wrapper>
      <h1 className="flex justify-center py-6 max-w-screen mx-auto text-4xl font-bold">
        Product Details
      </h1>
      <div className="py-16 block">
        <div className="flex justify-between">
          <div className="flex flex-grow flex-shrink gap-8">
            <div className="flex flex-col gap-4">
              <Image
                src={urlForImage(d[0].image).url()}
                alt="Small Image"
                width={150}
                height={150}
                className="small-image"
              />
            </div>
            <div className="block">
              <Image src={urlForImage(d[0].image).url()} width={650} height={400} alt="Big Image" />
            </div>
          </div>
          <div className="flex flex-col flex-grow gap-10 mt-16 w-[550px]">
            <div className="block mx-6">
              <h3 className="font-normal text-3xl leading-8 tracking-wider">
                {d[0].title}
              </h3>
              <span className="font-semibold text-xl opacity-30">
                {d[0].subcategory}
              </span>
            </div>
            <div className="block font-bold mx-6 text-base tracking-wider ">
              <p>SELECT SIZE</p>
              <ul className="flex mt-4 gap-4">
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
            <div className="flex mx-6">
              <p className="font-semibold text-xl text-gray-800">Quantity:</p>
              <div className="flex gap-2 mx-6 items-center text-xl">
                <div className="flex justify-center items-center text-2xl w-8 h-8 rounded-full bg-gray-200 cursor-pointer">
                  <BiMinus />
                </div>
                <p>1</p>
                <div className="flex justify-center items-center text-2xl w-8 h-8 rounded-full border border-black cursor-pointer">
                  <BsPlusLg />
                </div>
              </div>
            </div>

            <ProductCard />
            <div>
              <p className="font-bold text-2xl leading-8 tracking-widest text-[#212121] pl-6">
              ${d[0].price}.00
              </p>
            </div>

            {/* <div className="flex items-center mx-6">
              <button
                className="flex text-sm w-[77%] font-semibold leading-5 bg-[#212121] p-2.5 justify-center items-center gap-2 text-[#fff]"
                type="button"
              >
                <AiOutlineHeart />
                Add to Whishlist
              </button>
            </div> */}
          </div>
        </div>
        <div className="bg-[#fff] flex flex-col mt-16 pt-8 px-16 pb-24">
          <div className="flex border-b-2 border-[#c4c4c4] border-solid w-[100%] h-[150px] relative">
            <div className="flex absolute -z- font-extrabold text-9xl leading-[151px] text-[#f2f3f7] opacity-70 w-[100%] h-[100%] -mt-8">
              Overview
            </div>
            <h2 className="relative font-bold text-2xl leading-6 tracking-wider top-11">
              Product Information
            </h2>
          </div>

          <div className="flex text-justify my-16 relative">
            <h4 className="font-bold z-10 absolute">PRODUCT DETAILS</h4>
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
