export enum StyleTypes {
  "DEFAULT" = "default",
  "DARK" = "dark",
  "LIGHT" = "light",
  "ACCENT" = "accent",
  "ALERT" = "alert",
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
