import Image from "next/image";

import ProductOne from "../../../public/productone.png";

const cart = () => {
  return (
    
      <main className="mx-48">
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
                    <button className="flex ml-48">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="28"
                        width="28"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
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
                      <span className="border bg-[#f1f1f1] cursor-pointer">
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
                </div>
              </div>
            </div>
            <div className="flex flex-col p-10 gap-8 bg-[#fbfcff]">
              <h3 className="font-bold text-2xl">Order Summary</h3>
              <div className="flex justify-between gap-16">
                <p>Quantity</p>
                <span>1 Product</span>
              </div>
              <div className="flex justify-between gap-16">
                <p>Sub Total</p>
                <span>$195</span>
              </div>
              <div className="flex justify-between gap-16">
                <button className="flex justify-center items-center font-semibold leading-5 p-2.5 bg-[#212121] text-white gap-2" type="button">
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
