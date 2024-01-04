import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { RenderItems } from "./feature/RenderItems";

import { Header } from "@zocom/header";
import { useOrderStore } from "@zocom/orderstore";
import { Button, ButtonType } from "@zocom/button";
import { StyleTypes } from "@zocom/types";
import { addOrder } from '@zocom/myorderpage';

export const Myorderpage = () => {
  const { cart } = useOrderStore();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const id = nanoid();

  const openCheckout = () => {
    addOrder({ id: id, products: cart, totalPrice: total, orderStatus: "onGoing" });
    navigate('/checkout');
  }

  function calculateTotalPrice() {
    const totalPrice = cart.reduce((sum, cartItem) => {
      return sum + cartItem.price * cartItem.quantity;
    }, 0);
    setTotal(totalPrice);
  }

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  return (
    <>
      <Header showLogo={false} />
      <main className="cart">
        <section className="menu cart__items">
          <RenderItems />
        </section>
        <section className="cart__bottom">
          <section className="cart__bottom--upper">
            <section>
              <h3>Totalt</h3>
              <p>inkl 20% moms</p>
            </section>
            <h2>{total} SEK</h2>
          </section>
          <Button type={ButtonType.CART} style={StyleTypes.DARK} onClick={() => openCheckout()}>Take my money!</Button>
        </section>
      </main>
    </>
  );
};
