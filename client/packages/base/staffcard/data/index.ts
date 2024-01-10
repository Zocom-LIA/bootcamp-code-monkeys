import axios from "axios";
import { OrderApiResponse, UpdateOrder } from "@zocom/types";

export function updateOrder({id, orderStatus, timeStamp} : UpdateOrder): Promise<OrderApiResponse> {
  const body = {
    orderStatus,
    timeStamp
  }
  console.log("Body:"+ body, "id: "+ id)
  return axios
    .put<OrderApiResponse>("https://0i6fkfbg0e.execute-api.eu-north-1.amazonaws.com/api/order/" + id, body)
    .then((res) => res.data)
}