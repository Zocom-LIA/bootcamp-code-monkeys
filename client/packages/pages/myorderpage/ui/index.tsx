import "./style.scss";
import { Header } from "@zocom/header";
import { RenderItems } from "./feature/RenderItems";

export const Myorderpage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="menu">
          <h2 className="menu__title">Cart</h2>
          <RenderItems />
        </section>
      </main>
    </>
  );
};
