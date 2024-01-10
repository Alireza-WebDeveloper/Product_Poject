import { ProductResponse } from '@/Types/product.type';
import BaseApi from './Base';
const getAllProduct = async () => {
  try {
    const response = await BaseApi.get<ProductResponse[]>('/products');
    return response.data;
  } catch (err: any) {
    throw new Error(err);
  }
};

const getProductDetail = async (id: string) => {
  try {
    const response = await BaseApi.get<ProductResponse>(`/products/${id}`);
    return response.data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export { getAllProduct, getProductDetail };
