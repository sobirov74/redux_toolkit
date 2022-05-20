import {
  cartSelector,
  decrement,
  increment,
  removeItem,
} from "shared/redux/reducers/cartReducer";
import { useAppDispatch, useAppSelector } from "shared/utils/hooks";
import styles from "./styles.module.css";

const RenderCart = () => {
  const cart = useAppSelector(cartSelector);
  const dispatch = useAppDispatch();

  if (cart?.length === 0) {
    return <span className={styles.descr}>cart is empty</span>;
  }

  const incrementNumber = (index: number) => () => dispatch(increment(index));

  const removeElement = (index: number) => dispatch(removeItem(index));

  const decrementNumber = (i: number, count: number) => {
    if (count > 1) {
      dispatch(decrement(i));
    } else if (count <= 1) {
      removeElement(i);
    }
  };
  return null;
  return (
    <div className={styles.cartList}>
      {cart?.map((item: any, index: number) => {
        return (
          <div className={styles.item} key={index}>
            <div className={styles.left}>
              <img alt="" src={item.image[0]} width={80} height={80} />

              <h3 className={styles.cartTitle}>{item.alias}</h3>
            </div>
            <div className={styles.counterBlock}>
              <button
                className={styles.sign}
                // onClick={() => decrementNumber(index, item?.count)}
              >
                <img src="/icons/Minus.svg" alt="minus" />
              </button>
              <span className={styles.counter}>{item.count}</span>
              <button className={styles.sign} onClick={incrementNumber(index)}>
                <img src="/icons/Plus.svg" alt="plus" />
              </button>

              <button
                className={styles.delete}
                onClick={() => removeElement(index)}
              >
                <img src="/icons/trash.svg" alt="delete" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RenderCart;
