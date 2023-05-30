import Image from "next/image"
import Link from "next/link"

import Wrapper from "../components/Wrapper"

async function getFemaleProducts() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=products&fields.category=Female`, { cache: 'no-store' });
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Female = async() => {
  const product = await getFemaleProducts();
  
  return (
    <Wrapper>
    <h1 className="flex justify-center py-16 max-w-screen mx-auto text-4xl font-bold">All Female Products</h1>
    <div className="grid grid-cols-4 gap-24">
      {product.items.map((p:any, i:number)=>(
      <div key={i}>
        {product.includes.Asset.map((elem:any)=>(
          
      <div key={elem.sys.id}>
      <Link href={{
                    pathname: `/products/${p.fields.slug}`,
                    query: { data: p.fields.slug }, // the data
                  }}>
        {p.fields.image.sys.id == elem.sys.id ?
      
      <Image src={"https:" + elem.fields.file.url} alt="Product 1" width={400} height={400}/> : <div></div>}</Link>
      </div>
        ))}

      <h3 className="text-lg font-bold">{p.fields.title}</h3>
      <h4 className="text-lg font-semibold text-gray-500">{p.fields.subCategory}</h4>
      <p className="text-2xl font-semibold">{p.fields.price}</p>
      
      </div>
      ))}
    </div>
    
    </Wrapper>
  )
}

export default Female