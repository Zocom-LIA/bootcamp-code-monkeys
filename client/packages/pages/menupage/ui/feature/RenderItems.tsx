import { useQuery } from "@tanstack/react-query";
import { getMenu } from "@zocom/menupage";
import { Card } from "@zocom/card";
import { CardType } from "@zocom/types"

export const RenderItems = () => {
  const menuQuery = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });

  const menuItems = menuQuery?.data?.menu || [];
  menuItems.sort((a, b) => a.id.localeCompare(b.id));
  if (menuQuery.isLoading) return <h1>Loading...</h1>;

  if (menuQuery.isError) return <pre>{JSON.stringify(menuQuery.error)}</pre>;

  return (
    <>
      {menuItems.map((wonton, index) => {
        return(
        <Card props={wonton} key={index} state={CardType.MENU} />
      )})}
    </>
  );
};