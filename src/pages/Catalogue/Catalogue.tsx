import { useAppDispatch } from "../../redux/hooks";
import { useAppSelector } from "../../redux/hooks";
import { getProduct } from "../../utils/product";
import { useEffect } from "react";
import styles from "./styles.module.css";
import { Product } from "../../utils/types";
import { addItem } from "../../redux/reducers/cartSlice";
import { Link } from "react-router-dom";

const Catalogue = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.product);

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
                  <Link to={`/product/${product.id}`}>{product.name_ru}</Link>
                </h3>
                <button
                  className={styles.cardbtn}
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
