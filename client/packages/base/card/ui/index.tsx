import React from "react";
import { Button } from "@zocom/button";

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
    dip?: {
      name: string;
      price: number;
    }[];
  };
};

export const Card = ({
  props: { name, price, ingredients, amount, dip },
  onClick,
  state,
}: CardProps) => {
  return (
    <article>
      <section>
        <h3>{name}</h3>
        <aside>...........</aside>
        <span>{price} SEK</span>
      </section>
      {state === CardType.MENU && <p>{ingredients?.join(", ")}</p>}
      {state === CardType.SAUCE &&
        dip &&
        dip.map((sauce) => (
          <Button key={sauce.name} onClick={() => console.log("hello")}>
            {sauce.name}
          </Button>
        ))}
      {state === CardType.CART && <></>}
      <p>{state}</p>
    </article>
  );
};
