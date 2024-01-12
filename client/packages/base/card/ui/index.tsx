/* eslint-disable react-refresh/only-export-components */
import "./style.scss";
import { Button } from "@zocom/button";
import { WontonTypes, Product, CardType } from "@zocom/types";
import { useCard } from "./feature/cardUtils";
import { AmountSwitcher } from "./feature/AmountSwitcher"

type CardProps = {
  onClick?: () => void;
  state: CardType;
  props: WontonTypes | Product;
};

export const Card = ({ props, state }: CardProps) => {
  const { handleAddToCart, isWontonType, isProductType } = useCard();

  return (
    <article className="card">
      <section
        className="card__top"
        onClick={
          state === CardType.MENU && props.name !== "Dipsås"
            ? () => handleAddToCart(props)
            : undefined
        }
      >
        <h3>{props.name}</h3>
        <aside></aside>
        <span>
          {`${
            isProductType(props) ? props.price * props.quantity : props.price
          }`}{" "}
          SEK
        </span>
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
          <AmountSwitcher {...props} />
        ) : state === CardType.RECEIPT ? (
          <>
            <p>{isProductType(props) && props.quantity} stycken</p>
          </>
        ) : (
          <></>
        )}
      </section>
    </article>
  );
};