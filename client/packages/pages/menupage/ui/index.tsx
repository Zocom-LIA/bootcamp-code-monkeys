import "./style.scss";
import { wontons } from "../../../../../data/menu.json";
import { Card, CardType } from "@zocom/card";

export const Menupage = () => {

  return (
    <section>
      {wontons &&
        wontons.map((wonton, index) => (
          <Card props={wonton} key={index} state={CardType.MENU} />
        ))}

    </section>
  );
};
