"use client";
import { FC } from "react";
import { CgShoppingCart } from "react-icons/cg";

const ProductCard = (item: any) => {
  console.log("Adeel", item.item[0]._id);

  const handleAddToCart = async () => {
    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: item.item[0]._id,
      }),
    });

    const result = await res.json();
  };
  return (
    <div className="flex items-center mx-6">
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
