/* eslint-disable react-refresh/only-export-components */
import { Button, ButtonType } from "@zocom/button";
import "./style.scss";
import { WontonTypes, Product } from "@zocom/types";
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

//Add amount

export const Card = ({ props, state }: CardProps) => {
  const { addToCart, updateCart, cart } = useOrderStore();
  // const { ingredients, name, price, sauces } = props;

  function handleAddToCart(product: WontonTypes) {
    const existingItem = cart.find((cartItem) => cartItem.id === product.id);
    if (existingItem) {
      updateCart(existingItem);
    } else {
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
      addToCart(newProduct);
    }

    console.log("Cart", cart);
  }

  function isWontonType(object: any): object is WontonTypes {
    return "ingredients" in object;
  }

  function isSauceType(object: any): object is WontonTypes {
    return "sauces" in object;
  }

  function isProductType(object: any): object is Product {
    return "quantity" in object;
  }

  return (
    <article className="card">
      <section
        className="card__top"
        onClick={
          state === CardType.MENU ? () => handleAddToCart(props) : undefined
        }
      >
        <h3>{props.name}</h3>
        <aside></aside>
        <span>{`${props.price} SEK`}</span>
      </section>
      <section className="card__bottom">
        {state === CardType.MENU ? (
          isWontonType(props) && props.ingredients ? (
            <p>{props.ingredients?.join(", ")}</p>
          ) : (
            isSauceType(props) &&
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
              onClick={() => handleAddToCart(props)}
            >
              +
            </Button>
            <p>{isProductType(props) && props.quantity}</p>
            <Button
              type={ButtonType.ROUND}
              onClick={() => handleAddToCart(props)}
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
