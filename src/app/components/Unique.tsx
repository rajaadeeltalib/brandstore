import Wrapper from "./Wrapper"
import Image from "next/image"
import UniqueOne from "../../../public/uniqueone.webp"


const Unique = () => {
    
  return (
    <>
    <Wrapper>
    <div className="text-5xl font-bold ml-[700px] w-[600px] mt-36">
        <div>Unique and Authentic Vintage Designer Jewellery</div>
    </div>
    </Wrapper>
    <div className="max-w-screen bg-teal-50 h-20 -mt-14">
    
    </div>
    {/* .................. */}
    <div className="relative px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-28 lg:py-8 bg-teal-50">
      
      <div className="relative">
        <div className="grid gap-6  lg:grid-cols-2">
          <div className="grid gap-6  md:grid-cols-2">
          <div className="max-w-screen flex items-center text-8xl font-bold text-gray-200 bg-teal-50 -mt-4 absolute">Different<br/> from<br/> others</div>
       
             
              <div className="relative">
                
                <h6 className="mb-2 font-semibold leading-5 w-44">
                Using Good Quality Materials
                </h6>
                <p className="text-sm text-gray-900 w-36">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                </p>
              </div>
            
            <div className="relative">
              
              <h6 className="mb-2 font-semibold leading-5 w-36">
              100% Handmade Products
              </h6>
              <p className="text-sm text-gray-900 w-36">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="relative">
              
              <h6 className="mb-2 font-semibold leading-5 -mt-24">
              Modern Fashion Design
              </h6>
              <p className="text-sm text-gray-900 w-36">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="relative">
             
              <h6 className="mb-2 font-semibold leading-5 w-36 -mt-24">
              Discount for Bulk Orders
              </h6>
              <p className="text-sm text-gray-900 w-36">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center -ml-12">
            <Image src={UniqueOne} alt="Unique One" />
            <div className="items-center pl-6 text-justify leading-relaxed">
           <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
           <button className='mt-10 text-lg font-bold bg-black text-white w-48 h-[46px] flex justify-center items-center gap-2'>See All Products</button>
          </div>
          </div>
          
          
        </div>
      </div>
    </div>
  
    {/* <div className="max-w-screen flex items-center text-8xl font-bold text-gray-200 bg-teal-50 pl-32 pt-8 relative">Different<br/> from<br/> others</div>
        <div>
        <h4 className="absolute z-10">Using Good Quality Materials</h4>
        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
        </div> */}
       
    </>
  )
}

export default Unique