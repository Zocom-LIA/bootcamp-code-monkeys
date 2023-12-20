import "./style.scss";
import React, { ReactNode } from "react";

export enum ButtonType {
  "REGULAR" = "regular",
  "CART" = "cart",
  "ROUND" = "round",
}

type ButtonProps = {
  children: ReactNode | ReactNode[];
  type?: ButtonType;
  onClick: () => void;
};

export const Button = ({
  children,
  type = ButtonType.REGULAR,
  onClick,
}: ButtonProps) => {
  return (
    <button className={`button__${type}`} onClick={() => onClick()}>
      {children}
    </button>
  );
};
