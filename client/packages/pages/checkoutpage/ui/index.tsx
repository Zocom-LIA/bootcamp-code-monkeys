import { useNavigate } from "react-router-dom";
import "./style.scss";
import { Header } from "@zocom/header";
import { Button, ButtonType } from "@zocom/button";
import { StyleTypes, Order } from "@zocom/types";
import { getOrder } from "@zocom/checkoutpage";
import { useQuery } from "@tanstack/react-query";
import { CountdownTimer } from './feature/index';

export const Checkoutpage = () => {
  const navigate = useNavigate();
  
  const orderQuery = useQuery({
    queryKey: ["order"],
    queryFn: getOrder
  });

  const orderItem = orderQuery?.data?.order || [];
  if (orderQuery.isLoading) return <h1>Loading...</h1>;

  if (orderQuery.isError) return <pre>{JSON.stringify(orderQuery.error)}</pre>;

  const isOrderType = (object: Order | never[]): object is Order =>
  "id" in object || "orderStatus" in object;

  const orderId = isOrderType(orderItem) ? orderItem.id : null;
  const statusElement = isOrderType(orderItem) && orderItem.orderStatus === 'onGoing' ? 'Tillagas!' : 'Är klara!'  
  
  return (
    <>
      <Header showLogo={true} />
      <main className="checkout">
        <section className="checkout__top">
            <figure className="checkout__top--image"></figure>
            <h2>Dina wontons {statusElement}</h2>
            <CountdownTimer />
            <p>#{orderId}</p>
        </section>
        <section className="checkout__bottom">
        <Button type={ButtonType.CART} style={StyleTypes.DARK} onClick={() => navigate('/')}>Beställ mer</Button>
        <Button type={ButtonType.CART} style={StyleTypes.DARK} onClick={() => navigate('/receipt')}>Se kvitto</Button>
        </section>
      </main>
    </>
  );
};