import { useOrderStore } from "@zocom/orderstore";
import { Product, WontonTypes } from "@zocom/types";

export const useCard = () => {
  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cart,
  } = useOrderStore();

  const handleAddToCart = (props: WontonTypes | Product) => {
    if ("id" in props) {
      const existingItem = cart.find((cartItem) => cartItem.id === props.id);
      existingItem
        ? increaseQuantity(existingItem)
        : addToCart({ ...props, quantity: 1 });
    }
  };

  const handleRemoveFromCart = (props: Product) => {
    if ("quantity" in props && "id" in props) {
      decreaseQuantity(props);
      props.quantity === 0 && removeFromCart(props);
    }
  };

  const isWontonType = (object: WontonTypes | Product): object is WontonTypes =>
    "ingredients" in object || "sauces" in object;

  const isProductType = (object: WontonTypes | Product): object is Product =>
    "quantity" in object;

  return { handleAddToCart, handleRemoveFromCart, isWontonType, isProductType };
};
