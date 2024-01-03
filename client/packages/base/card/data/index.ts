/* import { useOrderStore } from '@zocom/orderstore'
import { WontonTypes } from '@zocom/types';

const { addToCart, updateCart, cart } = useOrderStore();

export function handleAddToCart(product: WontonTypes) {
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
  } */