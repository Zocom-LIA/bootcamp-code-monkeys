/* eslint-disable react-refresh/only-export-components */
import { Button } from "@zocom/button";
import './style.scss';

export enum CardType {
  "MENU" = "menu",
  "SAUCE" = "sauce",
  "CART" = "cart",
}

type CardProps = {
  onClick?: () => void;
  state: CardType;
  props: {
    name?: string;
    price?: number;
    ingredients?: string[];
    amount?: number;
    sauces?: {
      name: string;
      price: number;
      desc?: string;
    }[];
  };
};

export const Card = ({
  props: { name, price, ingredients, amount, sauces },
  onClick,
  state,
}: CardProps) => {
  return (
    <article className="card">
      <section className="card__top">
        <h3>{name}</h3>
        <aside></aside>
        <span>{`${price} SEK`}</span>
      </section>
      <section className="card__bottom">
        {state === CardType.MENU ? (
          ingredients ? (
            <p>{ingredients?.join(", ")}</p>
          ) : (
            sauces &&
            sauces?.map((sauce) => (
              <Button key={sauce.name} onClick={() => console.log("hello")}>
                {sauce.name}
              </Button>
            ))
          )
        ) : state === CardType.CART ? (
          <></>
        ) : (
          <></>
        )}
      </section>
    </article>
  );
};
