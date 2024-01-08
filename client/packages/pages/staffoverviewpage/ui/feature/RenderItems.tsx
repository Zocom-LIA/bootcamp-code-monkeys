import { getAllOrders } from "@zocom/staffoverviewpage";
import { useQuery } from "@tanstack/react-query";

export const RenderItems = () => {
  const orderQuery = useQuery({
    queryKey: ["order"],
    queryFn: getAllOrders,
  });

  const orderItems = orderQuery?.data?.orders || [];
  if (orderQuery.isLoading) return <h1>Loading...</h1>;

  if (orderQuery.isError) return <pre>{JSON.stringify(orderQuery.error)}</pre>;

  const ongoingOrders = orderItems.filter(
    (item) => item.orderStatus === "onGoing"
  );
  const doneOrders = orderItems.filter((item) => item.orderStatus === "done");

  const sortedOngoingOrders = ongoingOrders.sort((a, b) => {
    const timeStampA = a.timeStamp?.getTime() || 0;
    const timeStampB = b.timeStamp?.getTime() || 0;

    return timeStampB - timeStampA;
  });

  const sortedDoneOrders = doneOrders.sort((a, b) => {
    const timeStampA = a.timeStamp?.getTime() || 0;
    const timeStampB = b.timeStamp?.getTime() || 0;

    return timeStampB - timeStampA;
  });

  return (
    <section>
      {sortedOngoingOrders &&
        sortedOngoingOrders.map((item) => <p>{item.id}</p>)}
      {sortedDoneOrders && sortedDoneOrders.map((item) => <p>{item.id}</p>)}
    </section>
  );
};

export default RenderItems;
