import { useOrderStore } from "@zocom/orderstore";
import { Card, CardType } from "@zocom/card";

export const RenderItems = () => {
  const { cart } = useOrderStore();

  return (
    <>
      {cart.map((product, index) => {
        return <Card props={product} key={index} state={CardType.CART} />;
      })}
    </>
  );
};
