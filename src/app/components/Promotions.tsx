import Wrapper from "./Wrapper";
import PromotionOne from "../../../public/promotionone.webp";
import PromotionTwo from "../../../public/promotiontwo.webp";
import PromotionThree from "../../../public/promotionthree.webp";
import Image from "next/image";

const Promotions = () => {
  return (
    <Wrapper>
      <section className="sm:py-24 py-8 2xl:px-32 xl:px-24 md:px-16 px-8">
        <h4 className="text-center text-blue-600 text-sm font-semibold pb-3.5">
          PROMOTIONS
        </h4>
        <h2 className="text-center text-3xl font-bold pb-8">
          Our Promotions Events
        </h2>
        <div className="flex lg:flex-row flex-col gap-4 ">
          <div className="flex-1 space-y-4 lg:mr-4">
            <div className="flex items-center justify-between bg-[#d6d6d8] px-8 h-48">
              <div>
                <h2 className="text-3xl font-semibold">
                  GET UP TO <span className="text-4xl font-bold">60%</span>
                </h2>
                <h3 className="text-lg">For the summer season</h3>
              </div>
              <Image
                src={PromotionOne}
                alt="Promotion Image 1"
                loading="lazy"
                width="180"
                height="196"
                className="place-self-end xl:mr-8"
              />
            </div>
            <div className="text-white text-center bg-black/90 min-[450px]:px-8 px-2 py-8 pt-12">
              <h2 className="text-4xl font-semibold">GET 30% Off</h2>
              <h5 className="text-sm mt-4 mb-1">USE PROMO CODE</h5>
              <h3 className="mx-auto bg-[#474747] font-semibold w-fit tracking-[0.3rem] min-[450px]:px-12 px-2 py-1.5 rounded-lg">
                DINEWEEKENDSALE
              </h3>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-4">
            <div className="flex-1 flex flex-col justify-between bg-[#efe1c7] pt-6">
              <div className="pl-4">
                <h4>Flex Sweatshirt</h4>
                <p className="flex items-end gap-x-3">
                  <span className="line-through">$100.00</span>
                  <span className="text-lg font-semibold">$75.00</span>
                </p>
              </div>
              <Image
                src={PromotionTwo}
                alt="Promotion Image 2"
                loading="lazy"
                width="282"
                height="362"
                className="mx-auto h-80"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between bg-[#d6d6d8] pt-6">
              <div className="pl-4">
                <h4>Flex Push Button Bomber</h4>
                <p className="flex items-end gap-x-3">
                  <span className="line-through">$225.00</span>
                  <span className="text-lg font-semibold">$190.00</span>
                </p>
              </div>
              <Image
                src={PromotionThree}
                alt="Promotion Image 3"
                loading="lazy"
                width="282"
                height="368"
                className="mx-auto h-80"
              />
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Promotions;
