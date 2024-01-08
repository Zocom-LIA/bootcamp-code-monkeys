import axios from "axios";
import { OrderApiResponse } from "@zocom/types";

export function getAllOrders(): Promise<OrderApiResponse> {

  return axios
    .get<OrderApiResponse>(
      "https://0i6fkfbg0e.execute-api.eu-north-1.amazonaws.com/api/orders"
    )
    .then((res) => res.data);
}