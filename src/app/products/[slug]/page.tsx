import React from "react";
import Image from "next/image";
import featuredImage from "../../../../public/productone.png";
import mainImage from "../../../../public/productone.png";
import Wrapper from "@/app/components/Wrapper";

const Product = ({}) => {
  return (
    <Wrapper>
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
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                  </svg>
                </span>
                <span className="num">1</span>
                <span className="mr-2.5 border-2 bg-[#f1f1f1] border-[#f1f1f1] ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                    <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                  </svg>
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
        <div className="product-desc-container">
          <div className="desc-title">
            <div className="desc-background">Overview</div>
            <h2>Product Information</h2>
          </div>
          <div className="desc-details">
            <h4>PRODUCT DETAILS</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="desc-care">
            <h4>PRODUCT CARE</h4>
            <ul>
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
