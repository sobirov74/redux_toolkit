/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import styles from "./styles.module.css";
import { Product } from "utils/types";
import { Link } from "react-router-dom";
import { cartAction } from "shared/redux/actions/cartAction";
import { getProductByAlias } from "shared/redux/reducers/findByAliasSlice";
import { useAppDispatch, useAppSelector } from "shared/utils/hooks";
import { productsSelector } from "shared/redux/reducers/productsReducer";
import { addItem } from "shared/redux/reducers/cartReducer";

const Catalogue: FC = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(productsSelector);
  console.log(products);

  useEffect(() => {
    dispatch(cartAction());
  }, []);

  const addElement = (product: Product) => () => dispatch(addItem(product));

  const getByAlias = (product: Product) => () =>
    dispatch(getProductByAlias(product));

  // if(cart.status)
  // return null;
  return (
    <div>
      <div className={styles.cards}>
        {products?.map((product: any, index: number) => {
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
                    // onClick={() => dispatch(getProductByAlias(product))}
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
