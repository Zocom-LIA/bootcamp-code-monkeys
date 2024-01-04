import "./style.scss";
import { Header } from "@zocom/header";
import { RenderItems } from "./feature/RenderItems";
import { useOrderStore } from "@zocom/orderstore";
import { useState, useEffect } from "react";
import { Button, ButtonType } from "@zocom/button";
import { useNavigate } from "react-router-dom";
import { StyleTypes } from "@zocom/types";

export const Myorderpage = () => {
  const { cart } = useOrderStore();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const openCheckout = () => {
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
