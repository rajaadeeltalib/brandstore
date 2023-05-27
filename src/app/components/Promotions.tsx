import Wrapper from "./Wrapper";
import PromotionOne from "../../../public/promotionone.webp";
import PromotionTwo from "../../../public/promotiontwo.webp";
import PromotionThree from "../../../public/promotionthree.webp";
import Image from "next/image";

const Promotions = () => {
  return (
    <Wrapper>
      <div className="grid grid-rows-2 mt-32">
        <h4 className="text-md font-bold text-blue-600 flex justify-center">
          PROMOTIONS
        </h4>
        <h2 className="text-4xl font-bold flex justify-center">
          Our Promotions Events
        </h2>
      </div>
      <div className="flex justify-between items-center mt-6">
        {/* Section left start */}
        <div className="mt-6">
          <div className="w-[700px] h-[205px] bg-gray-300 flex justify-between items-center">
            <div className="mx-8">
              <h4 className="text-4xl font-bold ">GET UP TO 60%</h4>
              <p className="text-lg font-medium">For the summer season</p>
            </div>
            <Image className="-mt-4" src={PromotionOne} alt="Promotion One" />
          </div>
          <div className="w-[700px] h-[200px] bg-black/90 mt-4 flex items-center justify-center">
            <div className="mx-8 text-white flex flex-col items-center justify-center">
              <h4 className="text-4xl font-bold">GET 30% Off</h4>
              <p className="text-md font-normal mt-6">USE PROMO CODE</p>
              <button className="bg-[#474747] rounded-md w-64 h-10 font-bold tracking-widest">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
        </div>
        {/* Section left end */}
        {/* Section right start */}
        <div className="grid grid-cols-2 space-x-6">
        <div className="w-[270px] h-[423px] bg-amber-100 mt-9 flex flex-col  justify-center mx-8 ">
        <p className="mx-6 mt-4">Flex Sweatshirt</p>
        <div className="flex">
        <p className="mx-6 line-through">$100.00</p>
        <p className="mx-6 text-lg font-bold">$75.00</p>
        </div>
        <Image src={PromotionTwo} alt="Promotion Two" />


        </div>
        <div className="w-[270px] h-[423px] bg-purple-200 mt-9 flex flex-col items-center justify-center mb-4">
        <p className="mx-6 mt-4">Flex Push Button Bomber</p>
        <div className="flex">
        <p className="mx-6 line-through">$225.00</p>
        <p className="mx-6 text-lg font-bold">$190.00</p>
        </div>
        <Image src={PromotionThree} alt="Promotion Three" />
        </div>
        </div>
        {/* Section right end */}
      </div>
    </Wrapper>
  );
};

export default Promotions;
