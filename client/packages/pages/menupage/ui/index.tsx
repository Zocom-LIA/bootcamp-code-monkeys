import "./style.scss";
import { wontons, dip } from "../../../../../data/menu.json";
import { Card, CardType } from "@zocom/card";

export const Menupage = () => {
  return (
    <section>
      {wontons &&
        wontons.map((wonton, index) => (
          <Card props={wonton} key={index} state={CardType.MENU} />
        ))}
      <Card props={dip} state={CardType.SAUCE} />
    </section>
  );
};
