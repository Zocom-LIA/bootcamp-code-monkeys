import { getAllOrders, orderSorting } from "@zocom/staffoverviewpage";
import { useQuery } from "@tanstack/react-query";
import { StaffCard } from "@zocom/staffcard";

export const RenderItems = () => {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("key");

  const orderQuery = useQuery({
    queryKey: ["orders"],
    queryFn: () => getAllOrders(key),
  });

  const orderItems = orderQuery?.data?.orders || [];
  if (orderQuery.isLoading) return <h1>Loading...</h1>;
  if (orderQuery.isError) return <pre>{JSON.stringify(orderQuery.error)}</pre>;

  const { sortedOngoingOrders, sortedDoneOrders } = orderSorting(orderItems);

  return (
    <>
      <section className="orders__ongoing">
        <section className="orders__headline">
          <h3>ongoing</h3>
          <aside></aside>
        </section>
        <section className="orders__items">
          {sortedOngoingOrders &&
            sortedOngoingOrders.map((item) => (
              <StaffCard key={item.id} props={item} type={item.orderStatus} />
            ))}
        </section>
      </section>
      <section className="orders__done">
        <section className="orders__headline">
          <h3>done</h3>
          <aside></aside>
        </section>
        <section className="orders__items">
          {sortedDoneOrders &&
            sortedDoneOrders.map((item) => (
              <StaffCard key={item.id} props={item} type={item.orderStatus} />
            ))}
        </section>
      </section>
    </>
  );
};