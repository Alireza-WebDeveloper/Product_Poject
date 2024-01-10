import { ProductResponse } from '@/Types/product.type';
import { myLoaderPartialImageType } from '@/Types/myLoaderImage.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const myLoader = ({
  src,
  width,
  quality,
}: Partial<myLoaderPartialImageType>) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
interface ProductProps {
  product: ProductResponse[];
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const renderProductItem = () => {
    return product.map((crs) => {
      return (
        <Link href={`/product/${crs.id}`} key={crs.id}>
          <section className="p-2 rounded border">
            <section className="relative w-100 h-60 rounded">
              <Image
                loader={myLoader}
                src={crs.image}
                alt={crs.title}
                fill
                style={{ objectFit: 'fill' }}
                priority
                sizes="(max-width: 1200px) 100vw"
                className="rounded"
              />
            </section>
          </section>
        </Link>
      );
    });
  };
  return (
    <div className="grid grid-cols-4 container mx-auto gap-5 p-2">
      {renderProductItem()}
    </div>
  );
};

export default Product;
