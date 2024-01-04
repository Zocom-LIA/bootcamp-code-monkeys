import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RenderItems } from './feature/RenderItems';

import { Header } from "@zocom/header";
import { Button, ButtonType } from "@zocom/button";
import { StyleTypes } from "@zocom/types";

export const Receiptpage = () => {

  const navigate = useNavigate();
  
  return (
    <>
      <Header showLogo={true} />
      <main className="receipt">
        <section className="receipt__items">
          <RenderItems />
        </section>
        <section className="receipt__bottom">
          <Button type={ButtonType.CART} style={StyleTypes.DARK} onClick={() => navigate('/')}>Gör en ny beställning</Button>
        </section>
      </main>
    </>
  );
};
