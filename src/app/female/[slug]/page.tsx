"use client"


const FemaleProduct = ({params}:{params:{slug:string}}) => {
 
  
  return (
    <div className="w-full md:py-20">
      <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
        <h1>Female Products</h1>
        <p className="py-8">{params.slug}</p>
        </div>
      </div>
    </div>
  )
}

export default FemaleProduct