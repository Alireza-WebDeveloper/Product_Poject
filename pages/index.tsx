import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Product from '@/Components/Product';
import { ProductResponse } from '@/Types/product.type';
import { getAllProduct } from '@/Helper/Course';
type HomeProps = {
  product: ProductResponse[];
};

const Home = ({ product }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Web Wizard | Tutorial</title>
      </Head>

      <Product product={product} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const product = await getAllProduct();
    return {
      props: {
        product,
      },
      revalidate: 10,
    };
  } catch (error) {
    return { notFound: true };
  }
};
