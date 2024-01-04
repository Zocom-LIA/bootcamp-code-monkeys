import "./style.scss";
import { CartButton } from "../feature/CartButton";
import { useNavigate } from "react-router-dom";

type logoType = {
  showLogo: boolean
}

export const Header = ({ showLogo }: logoType) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      { showLogo ? <figure className="header__logo" onClick={() => navigate("/")}></figure>: null}
      <CartButton  />
    </header>
  );
};
