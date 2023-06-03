"use client"
import { FC } from "react"
import { CgShoppingCart } from "react-icons/cg"


const ProductCard = (product: any) => {

    const handleAddToCart = async()=>{
        const res = await fetch("/api/cart", {
            method: 'POST',
            body: JSON.stringify({
                product_id: product._id
            })
        })

        const result = await res.json();
        console.log(result)
    }
  return (
    <div className="flex items-center mx-6">
              <button
                onClick={()=> handleAddToCart}
                className="flex text-sm w-[50%] font-semibold leading-5 bg-[#212121] p-2.5 justify-center items-center gap-2 text-[#fff]"
                type="button"
              >
                <CgShoppingCart />
                Add to Cart
              </button>
              
            </div>
  )
}

export default ProductCard