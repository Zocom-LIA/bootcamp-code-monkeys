/* eslint-disable react-refresh/only-export-components */
import "./style.scss";
import { Button, ButtonType } from "@zocom/button";
import { WontonTypes, Product, StyleTypes } from "@zocom/types";
import { useOrderStore } from "@zocom/orderstore";

export enum CardType {
  "MENU" = "menu",
  "SAUCE" = "sauce",
  "CART" = "cart",
}

type CardProps = {
  onClick?: () => void;
  state: CardType;
  props: WontonTypes | Product;
};

export const Card = ({ props, state }: CardProps) => {
  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cart,
  } = useOrderStore();

  const handleAddToCart = (props: WontonTypes | Product) => {
    if ("id" in props) {
      const existingItem = cart.find((cartItem) => cartItem.id === props.id);
      existingItem
        ? increaseQuantity(existingItem)
        : addToCart({ ...props, quantity: 1 });
    }
  };

  const handleRemoveFromCart = () => {
    if ("quantity" in props && "id" in props) {
      decreaseQuantity(props);
      props.quantity === 0 && removeFromCart(props);
    }
  };

  const isWontonType = (object: WontonTypes | Product): object is WontonTypes =>
    "ingredients" in object || "sauces" in object;

  const isProductType = (object: WontonTypes | Product): object is Product =>
    "quantity" in object;

  return (
    <article className="card">
      <section
        className="card__top"
        onClick={state === CardType.MENU ? () => handleAddToCart(props) : undefined}
      >
        <h3>{props.name}</h3>
        <aside></aside>
        <span>{`${isProductType(props) ? props.price * props.quantity : props.price}`} SEK</span>
      </section>
      <section className="card__bottom">
        {state === CardType.MENU ? (
          isWontonType(props) && props.ingredients ? (
            <p>{props.ingredients?.join(", ")}</p>
          ) : (
            isWontonType(props) &&
            props.sauces?.map((sauce) => (
              <Button key={sauce.name} onClick={() => handleAddToCart(sauce)}>
                {sauce.name}
              </Button>
            ))
          )
        ) : state === CardType.CART ? (
          <>
            <Button
              type={ButtonType.ROUND}
              style={StyleTypes.CART}
              onClick={() => handleAddToCart(props)}
            >
              +
            </Button>
            <p>{isProductType(props) && props.quantity} stycken</p>
            <Button
              type={ButtonType.ROUND}
              style={StyleTypes.CART}
              onClick={() => handleRemoveFromCart()}
            >
              -
            </Button>
          </>
        ) : (
          <></>
        )}
      </section>
    </article>
  );
};
