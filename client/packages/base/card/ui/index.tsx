/* eslint-disable react-refresh/only-export-components */
import { Button } from '@zocom/button';
import './style.scss';
import { WontonTypes } from '@zocom/types';


export enum CardType {
  'MENU' = 'menu',
  'SAUCE' = 'sauce',
  'CART' = 'cart',
}

type CardProps = {
  onClick?: () => void;
  state: CardType;
  props: WontonTypes;
};

//Add amount

export const Card = ({
  props: { name, price, ingredients, sauces },
  onClick,
  state,
}: CardProps) => {
  return (
    <article className="card">
      <section className="card__top" onClick={onClick}>
        <h3>{name}</h3>
        <aside></aside>
        <span>{`${price} SEK`}</span>
      </section>
      <section className="card__bottom">
        {state === CardType.MENU ? (
          ingredients ? (
            <p>{ingredients?.join(', ')}</p>
          ) : (
            sauces &&
            sauces?.map((sauce) => (
              <Button key={sauce.name} onClick={() => onClick}>
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
