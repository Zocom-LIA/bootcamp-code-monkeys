/* eslint-disable react-refresh/only-export-components */
import { Button } from '@zocom/button';
import './style.scss';
import { WontonTypes } from '@zocom/types';
import { useOrderStore } from '@zocom/orderstore';


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
  props,
  state,
}: CardProps) => {
  const { addToCart, updateCart, cart } = useOrderStore();
  const { ingredients, name, price, sauces } = props;

  function handleAddToCart(product: WontonTypes) {
    const existingItem = cart.find((cartItem) => cartItem.id === product.id);
      if (existingItem) {
        updateCart(existingItem)
      }
       else {
        const newProduct = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        } 
        addToCart(newProduct);
      }

    console.log('Cart', cart);
  }

  return (
    <article className="card">
      <section className="card__top" onClick={() => handleAddToCart(props)}>
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
              <Button key={sauce.name} onClick={() => handleAddToCart(sauce)}>
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
