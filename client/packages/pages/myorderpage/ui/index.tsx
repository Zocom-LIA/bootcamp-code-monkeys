import "./style.scss";
import { RenderItems } from "./feature/RenderItems";
import { useMyOrderPage } from './utils/orderUtils'

import { Header } from "@zocom/header";
import { Button, ButtonType } from "@zocom/button";
import { StyleTypes } from "@zocom/types";

export const Myorderpage = () => {
  const { total, openCheckout } = useMyOrderPage();

  return (
    <>
      <Header showLogo={false} showCart={true} />
      <main className="cart">
        <section className="menu cart__items">
          <RenderItems />
        </section>
        <section className="cart__bottom">
          <section className="cart__bottom--upper">
            <section>
              <h3>Totalt</h3>
              <p>inkl 20% moms</p>
            </section>
            <h2>{total} SEK</h2>
          </section>
          <Button isDisabled={(total == 0 ? true: false)}
            type={ButtonType.CART}
            style={StyleTypes.DARK}
            onClick={openCheckout}
          >
            Take my money!
          </Button>
        </section>
      </main>
    </>
  );
};
