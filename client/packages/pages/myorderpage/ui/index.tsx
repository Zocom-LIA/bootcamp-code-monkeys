import "./style.scss";
import { Header } from "@zocom/header";
import { RenderItems } from "./feature/RenderItems";
import { useOrderStore } from "@zocom/orderstore";
import { useState, useEffect } from "react";

export const Myorderpage = () => {
  const { cart } = useOrderStore();
  const [total, setTotal] = useState(0);

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
      <Header />
      <main>
        <section className="menu">
          <h2 className="menu__title">Cart</h2>
          <RenderItems />
        </section>
        <p>{total}</p>
      </main>
    </>
  );
};
