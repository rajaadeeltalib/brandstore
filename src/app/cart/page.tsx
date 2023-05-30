import Image from "next/image";
import {BiMinus} from "react-icons/bi"
import {BsPlusLg} from "react-icons/bs"
import {RiDeleteBinLine} from "react-icons/ri"

import ProductOne from "../../../public/productone.png";

const cart = () => {
  return (
    
      <main className="mx-32">
        <div className="top4 left-4 right-4 bottom-4"></div>
        <div className="p-12 my-16">
          <h2 className="font-bold text-2xl mb-8">Shopping Cart</h2>
          <div className="flex justify-between gap-16">
            <div className="mt-8 flex grow-[3px] shrink">
              <div className="flex gap-8">
                <div className="">
                  <Image src={ProductOne} alt="img" width={250} height={250} />
                </div>
                <div className="flex flex-col justify-between w-[75%]">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-light leading-6">
                      Brushed Raglan Sweatshirt
                    </h3>
                    <button className="flex ml-12 text-2xl">
                      <RiDeleteBinLine />
                    </button>
                  </div>
                  <p className="font-semibold text-base leading-4">Dress</p>
                  <p className="font-semibold text-base leading-6">
                    Delivery Estimation
                  </p>
                  <p className="font-semibold text-base leading-6 text-[#ffc700]">
                    5 Working Days
                  </p>
                  <div className="flex justify-between">
                    <span className="leading-5 font-bold text-lg tracking-widest">
                      $195
                    </span>
                    <div className="flex justify-between items-center gap-6">
                      <span className="border bg-[#f1f1f1] cursor-pointer">
                      <BiMinus />
                      </span>
                      <span className="num">1</span>
                      <span className="border bg-[#f1f1f1] cursor-pointer">
                        <BsPlusLg />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-8 gap-8 bg-[#fbfcff] grow shrink">
              <h3 className="font-bold text-2xl block">Order Summary</h3>
              <div className="flex justify-between gap-16">
                <p className="block">Quantity</p>
                <span>1 Product</span>
              </div>
              <div className="flex justify-between gap-16">
                <p>Sub Total</p>
                <span>$195</span>
              </div>
              <div className="flex justify-between gap-16">
                <button className="flex justify-center items-center font-semibold leading-5 p-2.5 bg-[#212121] text-white gap-2 w-full" type="button">
                  Process to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    
  );
};

export default cart;
