import axios from 'axios';

const BaseApi = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export default BaseApi;
