import { ProductResponse } from '@/Types/product.type';
import { myLoaderPartialImageType } from '@/Types/myLoaderImage.type';
import React from 'react';
import Image from 'next/image';
const myLoader = ({
  src,
  width,
  quality,
}: Partial<myLoaderPartialImageType>) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
interface ProductDetailProps {
  product: ProductResponse;
}
const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <section className="p-2 rounded border">
      <section className="relative w-96  h-80 m-auto rounded">
        <Image
          loader={myLoader}
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: 'fill' }}
          priority
          sizes="(max-width: 1200px) 100vw"
          className="rounded"
        />
      </section>
      <h1 className="text-center text-2xl font-bold">{product.title}</h1>
      <p className="capitalize w-fit text-sm mt-4">
        {product.description.slice(0, 60)}...
      </p>
    </section>
  );
};

export default ProductDetail;
