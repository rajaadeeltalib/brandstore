import Wrapper from "./Wrapper";
import ProductOne from "../../../public/productone.png"
import ProductTwo from "../../../public/producttwo.png"
import ProductThree from "../../../public/productthree.png"
import Image from "next/image";

const Products = () => {
  return (
    <Wrapper>
      <div className="grid grid-rows-2 mt-32">
        <h4 className="text-md font-bold text-blue-600 flex justify-center">
          PRODUCTS
        </h4>
        <h2 className="text-4xl font-bold flex justify-center">
        Check What We Have
        </h2>
      </div>
      <div className="flex mt-12">
     <div className=" h-96 hover:hover:scale-110 transition duration-700 ease-in-out z-10"><Image src={ProductOne} alt="Product One" width={500} height={500}/><p className="text-lg font-bold">Brushed Raglan Sweatshirt</p><p className="text-lg font-bold">$195</p>
</div>
     <div className="hover:hover:scale-110 transition duration-700 ease-in-out z-20"><Image src={ProductTwo} alt="Product Two" width={500} height={500} /><p className="text-lg font-bold">Cameryn Sash Tie Dress</p><p className="text-lg font-bold">$545</p></div>
     <div className=" h-96 hover:hover:scale-110 transition duration-700 ease-in-out z-30"><Image src={ProductThree} alt="Product Three" width={500} height={500} /><p className="text-lg font-bold">Flex Sweatshirt</p><p className="text-lg font-bold">$175</p></div>
     
        {/* Section right start */}
        
        {/* Section right end */}
      </div>
    </Wrapper>
  )
}

export default Products