"use client";

import { log } from 'console';
import React, { useState } from 'react'
import { BiMinus } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { CgShoppingCart } from "react-icons/cg";

const ProductCard = (item: any) => {
  const [count, setCount] = useState(1);
  const [quantity, setquantity] = useState("")
  function increaseCount() {
    setCount(count + 1);
   
  }
  function decreaseCount() {
    if (count === 1) {
    } else {
      setCount(count - 1);
    }
  }

  

  console.log("Adeel", item.item[0]._id);

  const handleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item.item[0]._id,
        quantity : count, 
      }),
      
    });

    const result = await res.json();
    console.log(result)
  };
  console.log("count",count);
  
  return (
    <div className="flex  items-center mx-6">
         <div className="flex justify-center items-center text-2xl w-8 h-8 rounded-full bg-gray-200 cursor-pointer my-4">
                  <BiMinus onClick={decreaseCount}/>
                </div>
                <p>{count}</p>
                <div className="flex justify-center items-center text-2xl w-8 h-8 rounded-full border border-black cursor-pointer">
                  <BsPlusLg onClick={increaseCount}/>
                </div>
      <button
        onClick={handleAddToCart}
        className="flex text-sm w-[50%] font-semibold leading-5 bg-[#212121] p-2.5 justify-center items-center gap-2 text-[#fff]"
        type="button"
      >
        <CgShoppingCart />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
