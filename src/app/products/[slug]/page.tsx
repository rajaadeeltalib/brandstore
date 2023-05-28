"use client"


const FemaleProduct = async ({params}:{params:{slug:string}}) => {
    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`)
    const res = await fetchData.json()
  
  return (
    <div className="w-full md:py-20">
      <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
        <h1>Female Products</h1>
        <p className="py-8">{res.id}</p>
        <p className="py-8">{res.title}</p>
        <p className="py-8">{res.body}</p>
        </div>
      </div>
    </div>
  )
}

export default FemaleProduct