import "./style.scss";
import { RenderItems } from "../feature/RenderItems";
import { Header } from '@zocom/header';

export const Menupage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="menu">
          <h2 className="menu__title">Meny</h2>
          <RenderItems />
        </section>
      </main>
    </>
  );
};
