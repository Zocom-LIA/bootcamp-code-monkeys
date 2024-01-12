import { Button, ButtonType } from "@zocom/button"
import { StyleTypes, Product, WontonTypes } from "@zocom/types"
import { useCard } from "./cardUtils";


export const AmountSwitcher = (props: WontonTypes | Product) => {
    const { handleAddToCart, handleRemoveFromCart, isProductType } = useCard();
    return (
        <>
        <Button
          type={ButtonType.ROUND}
          style={StyleTypes.CART}
          onClick={() => handleAddToCart(props)}
        >
          +
        </Button>
        <p>{isProductType(props) && props.quantity} stycken</p>
        <Button
          type={ButtonType.ROUND}
          style={StyleTypes.CART}
          onClick={() => isProductType(props) && handleRemoveFromCart(props)}
        >
          -
        </Button>
      </>
    )
}