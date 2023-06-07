import Image from "next/image";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import { client } from "../../lib/sanityClient";

import { urlForImage } from "../../../sanity/lib/image";

const getFemaleProducts = async () => {
  const res = await client.fetch(`*[_type=='product' && category=='Female']`);

  return res;
};

const FemaleProducts = async () => {
  const product = await getFemaleProducts();

  return (
    <Wrapper>
      <h1 className="flex justify-center py-16 max-w-screen mx-auto text-4xl font-bold">
        All Female Products
      </h1>
      <div className="grid justify-center items-center xl:grid-cols-4 lg:grid-cols-3 min-[600px]:grid-cols-2 grid-cols-1 md:gap-16 gap-6 mx-12">
        {product.map((item: any, index: number) => (
          <div key={index}>
            <div>
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

export default FemaleProducts;
