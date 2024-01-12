import { useOrderStore } from "@zocom/orderstore";
import { Card } from "@zocom/card";
import { CardType } from "@zocom/types"

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
