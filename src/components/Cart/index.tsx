import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  decrement,
  increment,
  removeItem,
} from "../../redux/reducers/cartSlice";
import styles from "./styles.module.css";

interface Props {
  close: Function;
}

const Cart: FC<Props> = ({ close }) => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  if (cart?.length === 0) {
    return <span className={styles.descr}>cart is empty</span>;
  }
  const incrementNumber = (i: number) => {
    dispatch(increment(i));
  };
  const decrementNumber = (i: number, count: number) => {
    if (count > 1) {
      dispatch(decrement(i));
    } else if (count <= 1) {
      dispatch(removeItem(i));
    }
  };

  return (
    <div className={styles.cartBlock}>
      <div className={styles.top}>
        <h2 className={styles.title}>cart</h2>
        <img
          src={"/icons/CloseX.svg"}
          height={19}
          width={19}
          alt={"close button"}
          onClick={() => close()}
          className={styles.close}
        />
      </div>
      <div className={styles.cartList}>
        {cart?.map((item, index: number) => {
          return (
            <div className={styles.item} key={index}>
              <div className={styles.left}>
                <img alt="" src={item.img[0]} width={80} height={80} />

                <h3 className={styles.cartTitle}>{item.alias}</h3>
              </div>
              <div className={styles.counterBlock}>
                <button
                  className={styles.sign}
                  onClick={() => decrementNumber(index, item?.count)}
                >
                  <img src="/icons/Minus.svg" alt="minus" />
                </button>
                <span className={styles.counter}>{item.count}</span>
                <button
                  className={styles.sign}
                  onClick={() => incrementNumber(index)}
                >
                  <img src="/icons/Plus.svg" alt="plus" />
                </button>

                <button
                  className={styles.delete}
                  onClick={() => dispatch(removeItem(index))}
                >
                  <img src="/icons/trash.svg" alt="delete" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
