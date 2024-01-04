import { useQuery } from "@tanstack/react-query";
import { getOrder } from "@zocom/checkoutpage";
import { Card, CardType } from "@zocom/card";
import { Order } from '@zocom/types';

export const RenderItems = () => {
    const orderQuery = useQuery({
        queryKey: ["order"],
        queryFn: getOrder
      });
    
      const orderItem = orderQuery?.data?.order || [];
      if (orderQuery.isLoading) return <h1>Loading...</h1>;
    
      if (orderQuery.isError) return <pre>{JSON.stringify(orderQuery.error)}</pre>;
    
      const isOrderType = (object: Order | never[]): object is Order =>
      "id" in object || "products" in object;
    
      const orderId = isOrderType(orderItem) ? orderItem.id : null;
      const orderProducts = isOrderType(orderItem) ? orderItem.products : null;
      const orderTotal = isOrderType(orderItem) ? orderItem.totalPrice : null;

  return (
    <>
        <figure></figure>
        <h2>Kvitto</h2>
        <p>#{orderId}</p>
      {orderProducts && orderProducts.map((product, index) => {
        return(
        <Card props={product} key={index} state={CardType.RECEIPT} />
      )})}
        <section className="receipt__bottom--upper">
            <section>
              <h3>Totalt</h3>
              <p>inkl 20% moms</p>
            </section>
            <h2>{orderTotal} SEK</h2>
          </section>
    </>
  );
};