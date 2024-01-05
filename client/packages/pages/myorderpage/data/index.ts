import axios from "axios";
import { Order, OrderApiResponse } from '@zocom/types';

export function addOrder(order: Order): Promise<OrderApiResponse> {
  return axios
    .post<OrderApiResponse>(
      "https://0i6fkfbg0e.execute-api.eu-north-1.amazonaws.com/api/order"
    , order)
    .then((res) => res.data);
}