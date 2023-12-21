/* import { useQuery } from "@tanstack/react-query";*/
/* import { getMenu } from '..'; */

import "./style.scss";
import { wontons } from "../../../../../data/menu.json";
import { Card, CardType } from "@zocom/card";

export const Menupage = () => {
/* 
  const menuQuery = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  })

  const menuItems = menuQuery?.data || [];
  console.log(menuItems);
  
  if (menuQuery.isLoading) return <h1>Loading...</h1>

  if (menuQuery.isError) return <pre>{JSON.stringify(menuQuery.error)}</pre> */

  return (
    <section className="menu">
      <h2 className="menu__title">Menu</h2>
      {wontons &&
        wontons.map((wonton, index) => (
          <Card props={wonton} key={index} state={CardType.MENU} />
        ))}

    </section>
  );
};
