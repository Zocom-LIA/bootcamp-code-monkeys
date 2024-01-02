import { useQuery } from "@tanstack/react-query";
import { getMenu } from "@zocom/menupage";
import { Card, CardType } from "@zocom/card";
import { useOrderStore } from "../../../../../src/stores/OrderStore";
import { Product, WontonTypes } from "@zocom/types";

export const RenderItems = () => {
  const { addToCart, cart } = useOrderStore();
  const menuQuery = useQuery({
    queryKey: ["menu"],
    queryFn: getMenu,
  });

  const menuItems = menuQuery?.data?.menu || [];
  menuItems.sort((a, b) => a.id.localeCompare(b.id));

  if (menuQuery.isLoading) return <h1>Loading...</h1>;

  if (menuQuery.isError) return <pre>{JSON.stringify(menuQuery.error)}</pre>;

  function handleAddToCart(product: WontonTypes) {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === product.id);

    if (product.sauces) {
      console.log('Found it');
      const newDipSauce = {
        id: product.id,
        name: product.sauces[0].name,
        price: product.price,
        quantity: 1
      }
      addToCart(newDipSauce);
      
    } else {
      if (existingItemIndex >= 0) {
        const item = cart[existingItemIndex];
        const updateProduct = {
          ...item,
          quantity: item.quantity += 1
        }
        cart.splice(existingItemIndex, 1, updateProduct);
        
      } else {
        const newProduct = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        } 
        addToCart(newProduct);
      }
    }

    console.log('Cart', cart);
  }

  return (
    <>
      {menuItems.map((wonton, index) => (
        <Card props={wonton} key={index} state={CardType.MENU} onClick={() => handleAddToCart(wonton)} />
      ))}
    </>
  );
};