import ProductOne from "../../../public/productone.png";
import ProductTwo from "../../../public/producttwo.png";
import ProductThree from "../../../public/productthree.png";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <div>
      <div className="mt-4">
        <h4 className="text-md font-bold text-blue-600 flex justify-center lg:mb-8 ">
          PRODUCTS
        </h4>
        <h2 className="text-3xl lg:text-4xl font-bold flex justify-center mx-8">
          Check What We Have
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:max-w-[1090px] lg:mx-auto mx-8 cursor-pointer">
        <div className=" h-96 hover:hover:scale-110 transition duration-700 ease-in-out z-10 mb-12">
          <Link href={"/products/brushed-raglan-sweatshirt"}>
            <Image
              src={ProductOne}
              alt="Product One"
              width={500}
              height={500}
            />
            <p className="text-lg font-bold">Brushed Raglan Sweatshirt</p>
            <p className="text-lg font-bold">$195</p>
          </Link>
        </div>
        <div className="hover:hover:scale-110 transition duration-700 ease-in-out z-20 cursor-pointer">
          <Link href={"/products/cameryn-sash-tie-dress"}>
            <Image
              src={ProductTwo}
              alt="Product Two"
              width={500}
              height={500}
            />
            <p className="text-lg font-bold">Cameryn Sash Tie Dress</p>
            <p className="text-lg font-bold">$545</p>
          </Link>
        </div>
        <div className=" h-96 hover:hover:scale-110 transition duration-700 ease-in-out z-30 cursor-pointer">
          <Link href={"/products/flex-sweatshirt"}>
            <Image
              src={ProductThree}
              alt="Product Three"
              width={500}
              height={500}
            />
            <p className="text-lg font-bold">Flex Sweatshirt</p>
            <p className="text-lg font-bold">$175</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
