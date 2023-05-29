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
    <div className='grid grid-cols-2 '>
        {/* Hero Left Column Start*/}
        <div className='flex flex-col mt-16 gap-8'>
            <div className='bg-[#e1edff] w-[120px] h-10 flex items-center justify-center font-semibold text-[#0000ff] rounded-md'>Sale 70%</div>
            {/* <h1 className='text-[66px]  font-bold'>An Industrial Take on Streetwears</h1> */}
            <h1 className='text-6xl font-bold leading-[55px] tracking-[.03em] text-[#212121]'>An Industrial Take on Streetwears</h1>
            <p className='font-normal text-base leading-6 text-[#666] block w-[50%]'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            <div className='flex text-4xl'>            
            <button className='text-lg font-semibold leading-5 bg-[#212121] text-white w-[30%] h-[80px] flex justify-center items-center gap-2'><BiCart className='text-2xl'/>Start<br/> Shopping</button>
            </div>
            <div className='flex gap-4 mt-12'>
              <Image src={FeaturedImageOne} height={100} width={100}  alt='Featured Image 1' />
              <Image src={FeaturedImageTwo} height={100} width={100} alt='Featured Image 2' />
              <Image src={FeaturedImageThree} height={100} width={100} alt='Featured Image 3' />
              <Image src={FeaturedImageFour} height={100} width={100} alt='Featured Image 4' />
            </div>
            </div>
            
        {/* Hero left column end */}
        {/* Hero Right Column Start */}
        <div className='flex justify-center items-center relative'>
          <div className='w-[500px] h-[500px] bg-[#ffece3] flex justify-center items-center rounded-full absolute -z-10 -mt-16'></div>
      
      <div className='-mt-20'><Image src={HeroImage} alt="Hero Image" height={650} width={650}/></div>

        </div>
        {/* Hero Right Column END*/}
    </div>
    </Wrapper>
  )
}

export default Hero