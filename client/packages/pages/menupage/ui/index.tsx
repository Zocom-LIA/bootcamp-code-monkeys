import { useQuery } from "@tanstack/react-query";
import { getMenu } from '..';
import "./style.scss";
import { Card, CardType } from "@zocom/card";

export const Menupage = () => {

  const menuQuery = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  })

  const menuItems = menuQuery?.data?.menu || [];
  menuItems.sort((a, b) => a.id.localeCompare(b.id));
  
  if (menuQuery.isLoading) return <h1>Loading...</h1>

  if (menuQuery.isError) return <pre>{JSON.stringify(menuQuery.error)}</pre> 

  return (
    <section className="menu">
      <h2 className="menu__title">Meny</h2>
      {menuItems &&
        menuItems.map((wonton, index) => (
          <Card props={wonton} key={index} state={CardType.MENU} />
        ))}

    </section>
  );
};
