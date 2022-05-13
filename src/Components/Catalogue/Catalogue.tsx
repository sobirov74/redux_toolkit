import { addItem } from "../../redux/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useAppSelector } from "../../redux/hooks";
import { getProduct } from "../../utils/product";
import { useEffect } from "react";
import styles from "./styles.module.css";
import { Product } from "../../utils/types";

const Catalogue = () => {
  const dispatch = useAppDispatch();
  const { data, cart } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const addElement = (product: Product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      {/* {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {JSON.stringify(cart, null, 2)} */}

      <div className={styles.cards}>
        {data.map((product) => {
          return (
            <div className={styles.card} key={product.id}>
              <div className={styles.cardLeft}>
                <img src={product.image[0]} alt={""} height={130} width={130} />
              </div>

              <div className={styles.cardRight}>
                <h3 className={styles.cardTitle}>
                  <a href={"/product/[id]"}>{product.alias}</a>
                </h3>
                <button
                  className={styles.cardbtn}
                  // onClick={() => addItem && addItem(product)}
                  onClick={() => addElement(product)}
                >
                  to basket
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalogue;
