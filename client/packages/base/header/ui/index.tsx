import "./style.scss";
import { CartButton } from "../feature/CartButton";
import { useNavigate } from "react-router-dom";

type Header = {
  showLogo: boolean;
  heading?: string;
  showCart: boolean;
};

export const Header = ({ showLogo, heading, showCart }: Header) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <section className="header__left">
        {showLogo ? (
          <figure
            className="header__logo"
            onClick={() => navigate("/")}
          ></figure>
        ) : null}
        {heading && <h1 className="header__heading">{heading}</h1>}
      </section>
      {showCart && <CartButton />}
    </header>
  );
};
