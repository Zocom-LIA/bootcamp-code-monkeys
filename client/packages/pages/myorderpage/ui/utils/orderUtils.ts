import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useOrderStore } from "@zocom/orderstore";
import { addOrder } from "@zocom/myorderpage";

export function useMyOrderPage() {
  const { cart, emptyCart } = useOrderStore();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const id = nanoid();

  const openCheckout = () => {
    addOrder({
      id: id,
      products: cart,
      totalPrice: total,
      orderStatus: "onGoing",
    });
    localStorage.setItem("orderId", id);
    emptyCart();
    navigate("/checkout");
  };

  function calculateTotalPrice() {
    const totalPrice = cart.reduce((sum, cartItem) => {
      return sum + cartItem.price * cartItem.quantity;
    }, 0);
    setTotal(totalPrice);
  }

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  return {
    cart,
    total,
    openCheckout,
  };
}