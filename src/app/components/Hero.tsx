import React from "react";
import { BiCart } from "react-icons/bi";
import HeroImage from "../../../public/heroimage.webp";
import FeaturedImageOne from "../../../public/Featured1.webp";
import FeaturedImageTwo from "../../../public/Featured2.webp";
import FeaturedImageThree from "../../../public/Featured3.webp";
import FeaturedImageFour from "../../../public/Featured4.webp";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="relative flex gap-x-16 sm:py-8 2xl:px-32 xl:px-24 md:px-16 px-8">
        <div className="flex-1 flex flex-col pt-12 py-2 gap-y-10">
          <div className="bg-blue-100 text-blue-600 font-bold w-fit rounded-md px-5 py-2">
            Sale 70%
          </div>

          <h1 className="sm:text-6xl text-5xl font-bold">
            An Industrial Take on Streetwear
          </h1>

          <p className="text-slate-600 max-w-lg">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>

          <Link href="/products">
            <button className="lg:w-fit min-[410px]:w-2/4 w-3/4 flex justify-center items-center gap-x-3 bg-black text-white font-semibold sm:px-16 px-2 py-5">
              <BiCart /> Start Shopping
            </button>
          </Link>

          <div className="grid sm:grid-cols-4 grid-cols-2 gap-x-3 h-full items-end">
            <Image
              src={FeaturedImageOne}
              height={100}
              width={100}
              alt="Featured Image 1"
            />
            <Image
              src={FeaturedImageTwo}
              height={100}
              width={100}
              alt="Featured Image 2"
            />
            <Image
              src={FeaturedImageThree}
              height={100}
              width={100}
              alt="Featured Image 3"
            />
            <Image
              src={FeaturedImageFour}
              height={100}
              width={100}
              alt="Featured Image 4"
            />
          </div>
        </div>
        <div className="flex-1 max-lg:hidden">
          <div className="bg-[#ffece3] rounded-full w-[600px] h-[600px]">
            <Image
              className="absolute top-0 w-[650px] h-[650px]"
              src={HeroImage}
              alt="Hero Image"
              height={604}
              width={628}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
