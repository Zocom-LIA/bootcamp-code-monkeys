import axios from "axios";
import { OrderApiResponse, Order } from "@zocom/types";

export function getAllOrders(key: string | null): Promise<OrderApiResponse> {
  const url = `https://0i6fkfbg0e.execute-api.eu-north-1.amazonaws.com/api/orders?key=${key}`;

  return axios
    .get<OrderApiResponse>(url)
    .then((res) => res.data);
}

export const orderSorting = (orderItems: Order[]) => {
  const ongoingOrders = orderItems.filter((item) => item.orderStatus === "onGoing");
  const doneOrders = orderItems.filter((item) => item.orderStatus === "done");

  const sortedOngoingOrders = ongoingOrders.sort((a, b) => {
    const dateA = a.timeStamp ? new Date(a.timeStamp) : new Date(0);
    const dateB = b.timeStamp ? new Date(b.timeStamp) : new Date(0);
    return dateA.valueOf() - dateB.valueOf();
  });

  const sortedDoneOrders = doneOrders.sort((a, b) => {
    const timeStampA = parseInt(a.timeStamp || "0");
    const timeStampB = parseInt(b.timeStamp || "0");
    return timeStampB - timeStampA;
  });

  return { sortedOngoingOrders, sortedDoneOrders };
}