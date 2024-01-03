import "./style.scss";
import { CartButton } from "../feature/CartButton";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <figure className="header__logo" onClick={() => navigate("/")}></figure>
      <CartButton />
    </header>
  );
};
