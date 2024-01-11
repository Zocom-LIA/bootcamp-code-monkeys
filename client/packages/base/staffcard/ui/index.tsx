import "./style.scss";
import { Order, OrderApiResponse, UpdateOrder } from "@zocom/types";
import { StaffCardInfo } from "./feature/StaffCardInfo";
import { Timer } from "./feature/Timer";
import { useState } from "react";
import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { updateOrder } from "..";
import { getAllOrders } from "@zocom/staffoverviewpage";

type StaffCardType = {
  type: string;
  props: Order;
};

export const StaffCard = ({ props, type }: StaffCardType) => {
  const [orderStatus, setOrderStatus] = useState(props.orderStatus);
  const [stopTime, setStopTime] = useState<string | undefined>(undefined);

  const queryClient = useQueryClient();

  const stopOrderMutation = async ({
    id,
    orderStatus,
    timeStamp,
  }: UpdateOrder): Promise<OrderApiResponse> => {
    const response = await updateOrder({ id, orderStatus, timeStamp });
    return response;
  };

  const {
    mutate,
  }: UseMutationResult<OrderApiResponse, unknown, UpdateOrder, unknown> =
    useMutation({
      mutationFn: stopOrderMutation,
      onSuccess: () => {
        console.log("Order Changed");
        queryClient.invalidateQueries({ queryKey: ["orders"] });
      },
      onError: (error) => {
        console.error("Failed to stop the order:", error);
      },
    });

  const handleStopTimer = () => {
    mutate({
      id: props.id,
      orderStatus: "done",
      timeStamp: stopTime,
    });
  };

  return (
    <article className={"staffcard " + type}>
      <h4 className="staffcard__heading">#{props.id}</h4>
      <section className="staffcard__order">
        {props.products &&
          props.products.map((product, index) => (
            <StaffCardInfo key={index} {...product} />
          ))}
        <section className="staffcard__order--total">
          {props.totalPrice} sek
        </section>
      </section>
      <Timer
        timeStamp={props.timeStamp}
        onStop={handleStopTimer}
        status={orderStatus}
        setStopTime={setStopTime}
      />
    </article>
  );
};
