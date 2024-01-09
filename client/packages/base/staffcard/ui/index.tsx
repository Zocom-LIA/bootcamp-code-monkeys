import { Button, ButtonType } from "@zocom/button";
import { Order, StyleTypes } from "@zocom/types";
import "./style.scss";
import { StaffCardInfo } from './feature/StaffCardInfo';
import { Timer } from './feature/Timer';

type StaffCardType = {
  type: string;
  props: Order;
};

export const StaffCard = ({ props, type }: StaffCardType) => {
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
      <Timer timeStamp={props.timeStamp} />
      <Button
        onClick={() => console.log("Clicked")}
        type={ButtonType.REGULAR}
        style={StyleTypes.ALERT}
      >
        {
            props.orderStatus === 'done' ? 'Serverad' : 'Redo att serveras'
        }
      </Button>
    </article>
  );
};
