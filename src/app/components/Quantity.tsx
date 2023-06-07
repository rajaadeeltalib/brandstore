"use client";
import React, { useState } from 'react'
import {BiMinus} from "react-icons/bi"
import {BsPlusLg} from "react-icons/bs"

const Quantity = () => {
    const [count, setCount] = useState(1);

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
    <div className="flex gap-5 items-center md:mx-14">
              <p className="font-semibold text-xl text-gray-800">Quantity:</p>
              <div className="flex gap-3 items-center">
                <div className="flex justify-center items-center text-2xl w-8 h-8 rounded-full bg-gray-200 cursor-pointer my-4">
                  <BiMinus onClick={decreaseCount}/>
                </div>
                <p>{count}</p>
                <div className="flex justify-center items-center text-2xl w-8 h-8 rounded-full border border-black cursor-pointer">
                  <BsPlusLg onClick={increaseCount}/>
                </div>
              </div>
            </div>
  )
}

export default Quantity

