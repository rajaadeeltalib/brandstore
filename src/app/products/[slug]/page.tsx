"use client";
import React from "react";
import Image from "next/image";
import featuredImage from "../../../../public/productone.png";
import mainImage from "../../../../public/productone.png";
import Wrapper from "@/app/components/Wrapper";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { useSearchParams } from "next/navigation";

async function getSingleProducts(slug: any) {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=products&fields.slug=` +
      slug,
    { cache: "no-store" }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Product = async () => {
  const searchParams = useSearchParams();

  let d = await getSingleProducts(searchParams.get("data"));
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
                src={featuredImage}
                alt=""
                width={150}
                height={150}
                className="small-image"
              />
            </div>
            <div className="block">
              <Image src={mainImage} width={650} height={400} alt="" />
            </div>
          </div>
          <div className="flex flex-col flex-grow gap-10 mt-16">
            <div className="block mx-6">
              <h3 className="font-normal text-3xl leading-8 tracking-wider">
                {d.items[0]["fields"].title}
              </h3>
              <span className="font-semibold text-xl opacity-30">{d.items[0]["fields"].subCategory}</span>
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
            <div className="flex gap-8 mx-6 ">
              <h4 className="font-bold text-lg">Quantity: </h4>
              <div className="flex justify-center items-center  cursor-pointer rounded-[50%] gap-4">
                <span className="mr-2.5 border-2 bg-[#f1f1f1] border-[#f1f1f1] ">
                  <BiMinus />
                </span>
                <span className="num">1</span>
                <span className="mr-2.5 border-2 bg-[#f1f1f1] border-[#f1f1f1] ">
                  <BsPlusLg />
                </span>
              </div>
            </div>
            <div className="flex items-center mx-6">
              <button
                className="flex text-sm w-[50%] font-semibold leading-5 bg-[#212121] p-2.5 justify-center items-center gap-2 text-[#fff]"
                type="button"
              >
                <CgShoppingCart />
                Add to Cart
              </button>
              <p className="font-bold text-2xl leading-8 tracking-widest text-[#212121] pl-4">
              {d.items[0]["fields"].price}
              </p>
            </div>
            <div className="flex items-center mx-6">
              <button
                className="flex text-sm w-[77%] font-semibold leading-5 bg-[#212121] p-2.5 justify-center items-center gap-2 text-[#fff]"
                type="button"
              >
                <AiOutlineHeart />
                Add to Whishlist
              </button>
            </div>
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
