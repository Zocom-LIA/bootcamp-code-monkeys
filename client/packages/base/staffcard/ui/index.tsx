// import { Button, ButtonType } from "@zocom/button";
import { Order } from "@zocom/types";
import "./style.scss";
import { StaffCardInfo } from './feature/StaffCardInfo';
import { Timer } from './feature/Timer';
import { useState } from "react";

type StaffCardType = {
  type: string;
  props: Order;
};

export const StaffCard = ({ props, type }: StaffCardType) => {
  const [orderStatus, setOrderStatus] = useState(props.orderStatus)
  const [stopTime, setStopTime] = useState<string | undefined>(undefined)

  const handleStopTimer = () => {
    setOrderStatus('done');
    setStopTime(new Date().toISOString());
  }
  return (
    <article className={"staffcard " + type}>
      <h4 className="staffcard__heading">#{props.id}</h4>
      <section className="staffcard__order">
        {props.products &&
          props.products.map((product, index) => (
            <StaffCardInfo key={index} product={product} />
          ))}
        <section className="staffcard__order--total">{props.totalPrice} sek</section>
      </section>
      <Timer timeStamp={stopTime || props.timeStamp} onStop={handleStopTimer} status={orderStatus}/>
      {/* <Button
        onClick={() => console.log("Clicked")}
        type={ButtonType.REGULAR}
        style={StyleTypes.ALERT}
      >
        {
            props.orderStatus === 'done' ? 'Serverad' : 'Redo att serveras'
        }
      </Button> */}
    </article>
  );
};
