import axios from "axios";
import { OrderApiResponse } from "@zocom/types";

export function getAllOrders(key: string | null): Promise<OrderApiResponse> {
  const url = `https://0i6fkfbg0e.execute-api.eu-north-1.amazonaws.com/api/orders?key=${key}`;

  return axios
    .get<OrderApiResponse>(url)
    .then((res) => res.data);
}