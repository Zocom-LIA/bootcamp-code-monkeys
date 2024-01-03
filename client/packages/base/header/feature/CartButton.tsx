import { Button, ButtonType } from '@zocom/button';
import { StyleTypes } from '@zocom/types';
import { useEffect, useState } from 'react';
import { useOrderStore } from '../../../../src/stores/OrderStore';

export const CartButton = () => {
  const openCart = () => {};
  const [amount, setAmount] = useState(0);
  const { cart } = useOrderStore();

  function calcAmount() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].quantity;
    }
    setAmount(sum);
  }

  useEffect(() => {
    calcAmount();
  }, [cart]);

  return (
    <section className="header__cart">
      <Button onClick={() => openCart()} type={ButtonType.CART}>
        <svg
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5046 0C8.53403 0 4.50459 4.02943 4.50459 9V10.6166H4.00076C1.56528 10.6166 -0.304931 12.7747 0.0414116 15.1854L1.78084 27.2927C2.06375 29.2619 3.75079 30.7239 5.74019 30.7239H26.2507C28.2401 30.7239 29.9271 29.2619 30.21 27.2927L31.9495 15.1854C32.2958 12.7747 30.4256 10.6166 27.9901 10.6166H27.4862V9C27.4862 4.02944 23.4567 0 18.4862 0H13.5046ZM25.4862 10.6166V9C25.4862 5.13401 22.3522 2 18.4862 2H13.5046C9.6386 2 6.50459 5.13401 6.50459 9V10.6166H25.4862ZM4.00076 12.6166H27.9901C29.2078 12.6166 30.143 13.6956 29.9698 14.901L28.2304 27.0083C28.0889 27.9929 27.2454 28.7239 26.2507 28.7239H5.74019C4.74549 28.7239 3.90197 27.9929 3.76051 27.0083L2.02109 14.901C1.84791 13.6956 2.78302 12.6166 4.00076 12.6166Z"
            fill="#605858"
          />
        </svg>
      </Button>
      <Button
        type={ButtonType.CART}
        style={StyleTypes.ALERT}
        onClick={() => openCart()}
      >
        {amount}
      </Button>
    </section>
  );
};
