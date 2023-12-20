import React from 'react'

type CardProps = {
    onClick?: () => void;
    props: {
        name: string,
        price: number,
        ingredients?: string[],
        amount?: number,
        sauces?: string[],
    };
}

export const Card = ({ props:{name, price, ingredients, amount, sauces}, onClick }: CardProps) => {
  return (
    <article>
        <section>
            <h3>{name}</h3>
            <aside>...........</aside>
            <span>{price} SEK</span>
        </section>
        <p>{ingredients?.map((ingredient) => (
            <>{ingredient},{" "}</>
        ))}</p>
    </article>
  )
}