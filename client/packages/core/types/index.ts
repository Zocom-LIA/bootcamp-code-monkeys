export enum StyleTypes {
  "DEFAULT" = "default",
  "DARK" = "dark",
  "LIGHT" = "light",
  "ACCENT" = "accent",
  "ALERT" = "alert",
  "CART" = "cart",
  "BORDER" = "border",
}

export type WontonTypes = {
  name: string;
  id: string;
  desc?: string;
  ingredients?: string[];
  price: number;
  sauces?: {
    id: string;
    name: string;
    price: number;
  }[];
};

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type Order = {
  id: string;
  products: Product[];
  orderStatus: string;
  timeStamp?: Date;
  totalPrice: number;
};

export type OrderApiResponse = {
  success: boolean;
  order?: Order;
  orders?: Order[];
};
