import { create } from "zustand";
import { Product } from "@zocom/types";


// type Order = {
//   id: string;
//   products: Product[];
//   orderStatus: string;
//     timeStamp: Date;
//     totalPrice: number;
// };

type OrderState = {
  cart: Product[];
  addToCart: (product: Product) => void;
  updateCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  calculateTotalPrice: (price: number) => void;
};

export const useOrderStore = create<OrderState>()((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
  updateCart: (product) => 
    set((state) => {
      const updatedCart = state.cart.map((item) => 
      item.id === product.id ? {...item, quantity: item.quantity += 1} : item 
      );
      return {
        cart: updatedCart,
      }
    }),   
  removeFromCart: (product) => set((state) => ({})),
  calculateTotalPrice: (price) => set({})
}));
