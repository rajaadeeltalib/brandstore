import Wrapper from "../components/Wrapper";
import ProductOne from "../../../public/productone.png"
import ProductTwo from "../../../public/producttwo.png"
import ProductThree from "../../../public/productthree.png"
import Image from "next/image";

const Kids = () => {
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
      <div className="grid grid-cols-3 mt-12 gap-x-20">
     <div className="bg-gray-300 h-96 hover:hover:scale-110 duration-150"><Image src={ProductOne} alt="Product One" /><p className="text-lg font-bold">Brushed Raglan Sweatshirt</p><p className="text-lg font-bold">$195</p>
</div>
     <div className="hover:hover:scale-110 duration-150"><Image src={ProductTwo} alt="Product Two" height={395} /><p className="text-lg font-bold">Cameryn Sash Tie Dress</p><p className="text-lg font-bold">$545</p></div>
     <div className="bg-gray-300 h-96 hover:hover:scale-110 duration-150"><Image src={ProductThree} alt="Product Three" /><p className="text-lg font-bold">Flex Sweatshirt</p><p className="text-lg font-bold">$175</p></div>
     
        {/* Section right start */}
        
        {/* Section right end */}
      </div>
    </Wrapper>
  )
}

export default Kids