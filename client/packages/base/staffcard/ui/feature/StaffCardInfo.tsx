import { Product } from '@zocom/types';

type InfoType ={
    product: Product
}

export const StaffCardInfo = ({product}: InfoType) => {
  return (
    <section className="staffcard__order--info">
      <section className="staffcard__order--info-left">
        <h4>{product.name}</h4>
        <aside></aside>
        <span>{product.quantity} st</span>
      </section>
      <section className="staffcard__order--info-right">
        {product.price * product.quantity} sek
      </section>
    </section>
  );
};
