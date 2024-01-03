/* eslint-disable react-refresh/only-export-components */
import "./style.scss";
import { ReactNode } from "react";
import { StyleTypes } from '@zocom/types';

export enum ButtonType {
  "REGULAR" = "regular",
  "CART" = "cart",
  "ROUND" = "round",
}

type ButtonProps = {
  children: ReactNode | ReactNode[];
  style?: StyleTypes;
  type?: ButtonType;
  onClick: () => void;
};

export const Button = ({
  children,
  type = ButtonType.REGULAR,
  style = StyleTypes.DEFAULT,
  onClick
}: ButtonProps) => {
  return (
    <button className={`button__${type}--${style}`} onClick={onClick}>
      {children}
    </button>
  );
};
