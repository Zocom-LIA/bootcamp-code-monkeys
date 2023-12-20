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
    sauces?: {
      name: string;
      price: number;
      desc?: string
    }[];
  };
};

export const Card = ({
  props: { name, price, ingredients, amount, sauces },
  onClick,
  state,
}: CardProps) => {
  console.log(name)
  return (
    <article>
      <section>
        <h3>{name}</h3>
        <aside>...........</aside>
        <span>{price} SEK</span>
      </section>
      {state === CardType.MENU && 
      ingredients ? 
      <p>{ingredients?.join(", ")}</p> :
        (sauces &&
        sauces.map((sauce) => (
          <Button key={sauce.name} onClick={() => console.log("hello")}>
            {sauce.name}
          </Button>
        )))}
      {state === CardType.CART && <></>}
      <p></p>
    </article>
  );
};
