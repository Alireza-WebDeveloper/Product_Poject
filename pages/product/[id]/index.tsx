import ProductDetail from '@/Components/ProductDetail';
import { getProductDetail } from '@/Helper/Course';
import { ProductResponse } from '@/Types/product.type';
import { NextPage, GetServerSidePropsContext } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
type RecipeDetailPageProps = {
  product: ProductResponse;
};

const RecipeDetailPage: NextPage<RecipeDetailPageProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.id}</title>
      </Head>
      <div className="grid place-items-center">
        <ProductDetail product={product} />
      </div>
    </>
  );
};

export default RecipeDetailPage;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const { params }: any = ctx;
    const { id }: { id: string } = params;

    const product = await getProductDetail(id);

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
