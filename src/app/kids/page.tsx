import Image from "next/image";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import {client} from "../../lib/sanityClient";
import { Image as IImage, Slug } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";

export const getKidsProducts = async () => {
  const res = await client.fetch(`*[_type=='product' && category=='Male']`);

  // Recommendation: handle errors
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  return res
}



const KidsProducts = async () => {
  const product = await getKidsProducts();

 
  return (
    <Wrapper>
      <h1 className="flex justify-center py-16 max-w-screen mx-auto text-4xl font-bold">
        All Products
      </h1>
      <div className="grid grid-cols-4 gap-16">
        {product.map((item: any, index: number) => (
          <div key={index}>
            
              <div >
                <Link
                  href={{
                    pathname: `/products/[Slug.current]`,
                    query: { data: item.Slug.current }, 
                  }}
                  as={`/products/${item.Slug.current}`}
                >
                  <Image
                      src={urlForImage(item.image).url()}
                      alt="Product Image"
                      width={400}
                      height={400}
                    />                  
                </Link>
              </div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <h4 className="text-lg font-semibold text-gray-500">
              {item.subcategory}
            </h4>
            <p className="text-2xl font-semibold">${item.price}</p>
          </div>
        ))}
      </div>
      
    </Wrapper>
  );
};

export default KidsProducts;
