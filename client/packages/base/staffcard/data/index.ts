import axios from "axios";
import { OrderApiResponse, UpdateOrder } from "@zocom/types";
import { UseMutationResult, useMutation, useQueryClient } from "@tanstack/react-query";

export function updateOrder({id, orderStatus, timeStamp} : UpdateOrder): Promise<OrderApiResponse> {
  const body = {
    orderStatus,
    timeStamp
  }
  return axios
    .put<OrderApiResponse>("https://0i6fkfbg0e.execute-api.eu-north-1.amazonaws.com/api/order/" + id, body)
    .then((res) => res.data)
}

export async function stopOrderMutation({
  id,
  orderStatus,
  timeStamp,
}: UpdateOrder): Promise<OrderApiResponse> {
  const response = await updateOrder({ id, orderStatus, timeStamp });
  return response;
}

export function useStopOrderMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: stopOrderMutation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (error) => {
      console.error("Failed to stop the order: ", error);
    },
  }) as UseMutationResult<OrderApiResponse, unknown, UpdateOrder, unknown>;
}