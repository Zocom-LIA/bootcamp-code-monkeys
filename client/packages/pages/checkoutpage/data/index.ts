import axios from "axios";
import { OrderApiResponse } from "@zocom/types";

export function getOrder(): Promise<OrderApiResponse> {
  const orderId = localStorage.getItem("orderId");

  return axios
    .get<OrderApiResponse>(
      "https://0i6fkfbg0e.execute-api.eu-north-1.amazonaws.com/api/order/" + orderId
    )
    .then((res) => res.data);
}