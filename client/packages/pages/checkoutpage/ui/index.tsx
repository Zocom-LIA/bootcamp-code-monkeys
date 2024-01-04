import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Header } from "@zocom/header";
import { Button, ButtonType } from "@zocom/button";
import { StyleTypes } from "@zocom/types";


export const Checkoutpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header showLogo={true} />
      <main className="checkout">
        <section className="checkout__top">
            <figure className="checkout__top--image"></figure>
            <h2>Dina wontons tillagas</h2>
            <h3>ETA 5 min</h3>
            <p>#712839123</p>
        </section>
        <section className="checkout__bottom">
        <Button type={ButtonType.CART} style={StyleTypes.DARK} onClick={() => navigate('/')}>Beställ mer</Button>
        <Button type={ButtonType.CART} style={StyleTypes.DARK} onClick={() => navigate('/receipt')}>Se kvitto</Button>
        </section>
      </main>
    </>
  );
};