/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { useAppDispatch } from "redux/hooks";
import { useAppSelector } from "redux/hooks";
import styles from "./styles.module.css";
import { Product } from "utils/types";
import { addItem } from "redux/reducers/cartSlice";
import { getProductByAlias } from "redux/reducers/findByAliasSlice";
import getProducts from "utils/getProducts";
import { Link } from "react-router-dom";

const Catalogue: FC = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addElement = (product: Product) => () => dispatch(addItem(product));

  const getByAlias = (product: Product) => () =>
    dispatch(getProductByAlias(product));

  return (
    <div>
      <div className={styles.cards}>
        {data.map((product) => {
          return (
            <div className={styles.card} key={product.id}>
              <div className={styles.cardLeft}>
                <img src={product.image[0]} alt={""} height={130} width={130} />
              </div>

              <div className={styles.cardRight}>
                <h3 className={styles.cardTitle}>
                  <Link
                    onClick={getByAlias(product)}
                    to={`/product/${product.alias}`}
                  >
                    {product.name_ru}
                  </Link>
                </h3>
                <button
                  className={styles.cardbtn}
                  onClick={addElement(product)}
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
