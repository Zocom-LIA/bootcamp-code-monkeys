import { useQuery } from "@tanstack/react-query";
import { getOrder } from "@zocom/checkoutpage";
import { Card } from "@zocom/card";
import { Order, CardType } from "@zocom/types";

export const RenderItems = () => {
  const orderQuery = useQuery({
    queryKey: ["order"],
    queryFn: getOrder,
  });
  orderQuery.refetch();
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
      <section className="receipt__card--top">
        <figure className="receipt__card--top-image"></figure>
        <section className="receipt__card--top-info">
          <h2>Kvitto</h2>
          <p>#{orderId}</p>
        </section>
        <section className="receipt__card--top-items">
          {orderProducts &&
            orderProducts.map((product, index) => {
              return (
                <Card props={product} key={index} state={CardType.RECEIPT} />
              );
            })}
        </section>
      </section>
      <section className="receipt__card--bottom">
        <section>
          <h3>Totalt</h3>
          <p>inkl 20% moms</p>
        </section>
        <h2>{orderTotal} SEK</h2>
      </section>
    </>
  );
};