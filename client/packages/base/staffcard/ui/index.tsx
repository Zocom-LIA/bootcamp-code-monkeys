import "./style.scss";
import { Order } from "@zocom/types";
import { StaffCardInfo } from "./feature/StaffCardInfo";
import { Timer } from "./feature/Timer/Timer";
import { useState } from "react";
import { useStopOrderMutation } from "..";

type StaffCardType = {
  type: string;
  props: Order;
};

export const StaffCard = ({ props, type }: StaffCardType) => {
  const [stopTime, setStopTime] = useState<string | undefined>(undefined);
  const orderStatus = props.orderStatus;

  const mutate = useStopOrderMutation();
  const handleStopTimer = () => {
    mutate.mutate({
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
