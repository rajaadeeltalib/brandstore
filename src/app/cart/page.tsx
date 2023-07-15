"use client";
import Image from "next/image";
// import {BiMinus} from "react-icons/bi"
// import {BsPlusLg} from "react-icons/bs"
import { RiDeleteBinLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";

import ProductOne from "../../../public/productone.png";
import { log } from "console";

interface cartfetchedData {
  user_id : string,
  product_id : string,
  quantity : number,
}

const Cart = () => {
  const [count, setCount] = useState(1);
  const [cartData, setCartData] = useState<cartfetchedData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/cart");
        const data = await res.json();
        setCartData(data.res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  
    
  console.log(cartData)
  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    if (count === 1) {
    } else {
      setCount(count - 1);
    }
  }
  return (
    <main className="max-w-[1280px] mx-auto my-12">
      <div className="">
        <h2 className="font-bold text-2xl mb-8 flex justify-center">
          Shopping Cart
        </h2>
        {cartData.map((item, index)=>(
        <div key={index}>
          <h1>{item.user_id}</h1>
          <h2>{item.product_id}</h2>
            <h3>{item.quantity}</h3>
        </div>

        ))}
        
        <div className="md:flex md:justify-between md:gap-16">
          <div className="mt-8 flex grow-[3px] shrink">
            <div className="md:flex md:gap-8">
              <div className="flex justify-center mx-24">
                <Image src={ProductOne} alt="img" width={250} height={250} />
              </div>
              <div className="md:flex md:flex-col md:justify-between md:w-[50%]">
                <div className="flex justify-center items-center md:flex md:justify-between ">
                  <h3 className="text-xl font-light leading-6 flex justify-center m-4 md:flex md:justify-start">
                    Brushed Raglan Sweatshirt
                  </h3>
                  <button className="flex text-2xl">
                    <RiDeleteBinLine />
                  </button>
                </div>
                <p className="font-semibold text-base leading-4 flex justify-center md:flex md:justify-start mx-4">
                  Dress
                </p>
                <div className="flex justify-center gap-8 my-8 md:flex md:justify-start mx-4">
                  <p className="font-semibold text-base leading-6 flex justify-center">
                    Delivery Estimation:
                  </p>
                  <p className="font-semibold text-base leading-6 text-[#ffc700] flex justify-center">
                    5 Working Days
                  </p>
                </div>
                <div className="md:flex mx-4">
                  <span className="leading-5 font-bold text-lg tracking-widest flex justify-center my-8 md:my-0 md:flex md:justify-start ">
                    $195
                  </span>
                  <div className="flex mx-24 mb-8">
                    <p className="font-semibold text-xl text-gray-800 flex justify-center md:flex md:items-center">
                      Quantity:
                    </p>
                    <div className="flex gap-2 mx-6 items-center text-xl">
                      <div
                        onClick={decreaseCount}
                        className="flex justify-center items-center text-2xl w-8 8 rounded-full bg-gray-200 cursor-pointer"
                      >
                        -
                      </div>
                      <p>{count}</p>
                      <div
                        onClick={increaseCount}
                        className="flex justify-center items-center text-2xl w-8 h-8 rounded-full border border-black cursor-pointer"
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-8 gap-8 bg-[#fbfcff] grow shrink md:w-[30%] md:mr-16">
            <h3 className="font-bold text-2xl flex justify-center">
              Order Summary
            </h3>
            <div className="flex justify-between gap-16">
              <p className="block">Quantity</p>
              <span>1 Product</span>
            </div>
            <div className="flex justify-between gap-16">
              <p>Sub Total</p>
              <span>$195</span>
            </div>
            <div className="flex justify-between gap-16">
              <button
                className="flex justify-center items-center font-semibold leading-5 p-2.5 bg-[#212121] text-white gap-2 w-full"
                type="button"
              >
                Process to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
