import "./style.scss";
import { useNavigate } from "react-router-dom";
import { RenderItems } from "./feature/RenderItems";

import { Header } from "@zocom/header";
import { Button, ButtonType } from "@zocom/button";
import { StyleTypes } from "@zocom/types";
import { motion } from "framer-motion";

export const Receiptpage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header showLogo={true} showCart={false} />
      <main className="receipt">
        <motion.section className="receipt__card" initial={{ x: 100 }} animate={{ x: 0 }}>
          <RenderItems />
        </motion.section>
        <Button
          type={ButtonType.CART}
          style={StyleTypes.DARK}
          onClick={() => navigate("/")}
        >
          Gör en ny beställning
        </Button>
      </main>
    </>
  );
};
