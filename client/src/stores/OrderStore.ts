import { create } from "zustand";
import { Product } from "@zocom/types";

// type Product = {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// };

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
  removeFromCart: (product: Product) => void,
  calculateTotalPrice: (price: number) => void
};

export const useOrderStore = create<OrderState>()((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
    removeFromCart: (product) => set((state) => ({})),
    calculateTotalPrice: (price) => set({})
}));
