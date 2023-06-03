import Image from "next/image";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import {client} from "../../lib/sanityClient";
import { Image as IImage, Slug } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";

export const getProducts = async () => {
  const res = await client.fetch(`*[_type=='product']`);

  // Recommendation: handle errors
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

  return res
}

interface IProduct {
  title: string,
  category: string,
  subcategory: string,
  price: number,
  image: IImage,
  slug: Slug,
}

const Products = async () => {
  const product:IProduct[] = await getProducts();
 console.log(product)
 
  return (
    <Wrapper>
      <h1 className="flex justify-center py-16 max-w-screen mx-auto text-4xl font-bold">
        All Products
      </h1>
      <div className="grid grid-cols-4 gap-16">
        {product.map((p: any, i: number) => (
          <div key={i}>
            
              <div >
                <Link
                  href={{
                    pathname: `/products/[Slug]`,
                    query: { data: p.Slug }, 
                  }}
                  as={`/products/${p.Slug}`}
                >
                  <Image
                      src={urlForImage(p.image).url()}
                      alt="Product 1"
                      width={400}
                      height={400}
                    />                  
                </Link>
              </div>
            <h3 className="text-lg font-bold">{p.title}</h3>
            <h4 className="text-lg font-semibold text-gray-500">
              {p.subcategory}
            </h4>
            <p className="text-2xl font-semibold">${p.price}</p>
          </div>
        ))}
      </div>
      
    </Wrapper>
  );
};

export default Products;
