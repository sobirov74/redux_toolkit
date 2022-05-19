/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { useAppDispatch } from "redux/hooks";
import { useAppSelector } from "redux/hooks";
import styles from "./styles.module.css";
import { Cart, Product } from "utils/types";
import { addItem } from "redux/reducers/cartSlice";
import { getProductByAlias } from "redux/reducers/findByAliasSlice";
import getProducts from "utils/getProducts";
import { Link } from "react-router-dom";
import { cartSelector } from "shared/redux/reducers/cartReducer";
import { cartAction } from "shared/redux/actions/cartAction";

const Catalogue: FC = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(cartSelector);

  // const { data } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(cartAction());
  }, []);
  console.log(products);

  const addElement = (product: Product) => () => dispatch(addItem(product));

  const getByAlias = (product: Product) => () =>
    dispatch(getProductByAlias(product));

  // if(cart.status)
  // return null;
  return (
    <div>
      <div className={styles.cards}>
        {products?.map((product: any) => {
          return (
            <div className={styles.card} key={product.id}>
              <div className={styles.cardLeft}>
                <img src={product.image[0]} alt={""} height={130} width={130} />
              </div>

              <div className={styles.cardRight}>
                <h3 className={styles.cardTitle}>
                  {/* <div
                    onClick={getByAlias(product)}
                    // to={`/product/${product.alias}`}
                  >
                    {product.name_ru}
                  </div> */}
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
