import React from 'react'
import Wrapper from './Wrapper'
import {BiCart} from "react-icons/bi"
import HeroImage from '../../../public/heroimage.webp';
import FeaturedImageOne from '../../../public/Featured1.webp';
import FeaturedImageTwo from '../../../public/Featured2.webp';
import FeaturedImageThree from '../../../public/Featured3.webp';
import FeaturedImageFour from '../../../public/Featured4.webp';
import Image from "next/image"

const Hero = () => {
  return (
    <Wrapper>
    <div className='grid grid-cols-2 mt-6'>
        {/* Hero Left Column Start*/}
        <div className='flex flex-col mt-16 gap-8'>
            <div className='bg-[#E1EDFF] w-28 h-10 flex items-center justify-center font-bold text-blue-600 rounded-md'>Sale 70%</div>
            {/* <h1 className='text-[66px]  font-bold'>An Industrial Take on Streetwears</h1> */}
            <h1 className='text-7xl font-bold'>An Industrial Take on Streetwears</h1>
            <p className='text-gray-700 font-medium'>Anyone can beat you but no one can beat your outfit as<br /> long as you wear Dine outfits.</p>
            <div className='flex text-4xl'>            
            <button className='text-lg font-bold bg-black text-white w-48 h-[62px] flex justify-center items-center gap-2'><BiCart className='text-2xl'/>Start Shopping</button>
            </div>
            <div className='flex justify-between mt-12'>
              <Image src={FeaturedImageOne} height={100} width={100}  alt='Featured Image 1' />
              <Image src={FeaturedImageTwo} height={100} width={100} alt='Featured Image 2' />
              <Image src={FeaturedImageThree} height={100} width={100} alt='Featured Image 3' />
              <Image src={FeaturedImageFour} height={100} width={100} alt='Featured Image 4' />
            </div>
            </div>
            
        {/* Hero left column end */}
        {/* Hero Right Column Start */}
        <div className='flex justify-center items-center relative'>
          <div className='w-[550px] h-[550px] bg-pink-100 flex justify-center items-center rounded-full absolute -z-10 mt-7'></div>
      
      <div className=''><Image src={HeroImage} alt="Hero Image"/></div>

        </div>
        {/* Hero Right Column END*/}
    </div>
    </Wrapper>
  )
}

export default Hero