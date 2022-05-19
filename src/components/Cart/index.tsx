import { FC } from "react";
import RenderCart from "./RenderCart";
import styles from "./styles.module.css";

interface Props {
  close: Function;
}

const Cart: FC<Props> = ({ close }) => {
  const handleCloce = () => () => close();
  return (
    <div className={styles.cartBlock}>
      <div className={styles.top}>
        <h2 className={styles.title}>cart</h2>
        <img
          src={"/icons/CloseX.svg"}
          height={19}
          width={19}
          alt={"close button"}
          onClick={handleCloce()}
          className={styles.close}
        />
      </div>

      <RenderCart />
    </div>
  );
};
export default Cart;
