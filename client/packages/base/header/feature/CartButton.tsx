import { Button, ButtonType } from "@zocom/button";
import { StyleTypes } from "@zocom/types";
import { useEffect, useState } from "react";
import { useOrderStore } from "@zocom/orderstore";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { CartSvg } from './CartSvg'

export const CartButton = () => {
  const navigate = useNavigate();
  const openCart = () => {
    navigate("/cart");
  };
  const [amount, setAmount] = useState(0);
  const { cart } = useOrderStore();
  const animation = useAnimation();

  function calcAmount() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].quantity;
    }
    setAmount(sum);
  }

  useEffect(() => {
    calcAmount();

    animation.start({ scale: 1.5 });
    const stopAnimation = setTimeout(() => {
      animation.start({ scale: 1 });
    }, 500);
    return () => clearTimeout(stopAnimation);
    
  }, [cart, animation]);

  return (
    <section className="header__cart">
      <Button onClick={() => openCart()} type={ButtonType.CART}>
       <CartSvg />
      </Button>
      <Button
        type={ButtonType.CART}
        style={StyleTypes.ALERT}
        onClick={() => openCart()}
      >
        <motion.article animate={animation}>{amount}</motion.article>
      </Button>
    </section>
  );
};