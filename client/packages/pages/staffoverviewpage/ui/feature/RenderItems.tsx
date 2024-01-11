import { getAllOrders } from "@zocom/staffoverviewpage";
import { useQuery } from "@tanstack/react-query";
import { StaffCard } from "@zocom/staffcard";

export const RenderItems = () => {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("key");
  console.log("Using key for request: ", key);

  const orderQuery = useQuery({
    queryKey: ["orders"],
    queryFn: () => getAllOrders(key),
  });

  const orderItems = orderQuery?.data?.orders || [];
  if (orderQuery.isLoading) return <h1>Loading...</h1>;

  if (orderQuery.isError) return <pre>{JSON.stringify(orderQuery.error)}</pre>;

  const ongoingOrders = orderItems.filter(
    (item) => item.orderStatus === "onGoing"
  );
  const doneOrders = orderItems.filter((item) => item.orderStatus === "done");

  /* const sortedOngoingOrders = ongoingOrders.sort((a, b) => {
    const timeStampA = a.timeStamp?.getTime() || 0;
    const timeStampB = b.timeStamp?.getTime() || 0;

    return new Date(timeStampB - timeStampA);
  });

  const sortedDoneOrders = doneOrders.sort((a, b) => {
    const timeStampA = a.timeStamp?.getTime() || 0;
    const timeStampB = b.timeStamp?.getTime() || 0;

    return timeStampB - timeStampA;
  }); */

  return (
    <>
      <section className="orders__ongoing">
        <section className="orders__headline">
          <h3>ongoing</h3>
          <aside></aside>
        </section>
        <section className="orders__items">
          {ongoingOrders &&
            ongoingOrders.map((item) => (
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
          {doneOrders &&
            doneOrders.map((item) => (
              <StaffCard key={item.id} props={item} type={item.orderStatus} />
            ))}
        </section>
      </section>
    </>
  );
};

export default RenderItems;
