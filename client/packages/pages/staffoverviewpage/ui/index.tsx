import "./style.scss";
import { RenderItems } from "./feature/RenderItems";
import { Header } from "@zocom/header";

export const Overviewpage = () => {
  return (
    <>
      <Header showLogo={true} />
      <main>
        <RenderItems />
      </main>
    </>
  );
};
