import { useAppDispatch } from "../../redux/hooks";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Product } from "../../utils/types";
import { addItem } from "../../redux/reducers/cartSlice";
import { useNavigate } from "react-router-dom";
import { getAlias, getProductByAlias } from "../../redux/reducers/getProduct";
import getProducts from "../../utils/getProducts";
import { Link } from "react-router-dom";
import cartReducer from "../../redux/reducers/cartReducer";
// import { getProductById } from "../../redux/reducers/getProduct";
// console.log(cartReducer);

const Catalogue = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.cart);
  // const navigate = useNavigate();
  // const { id } = useAppSelector((state) => state.getId);
  // console.log(id);
  // console.log(cart);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // const handleClick = (alias: string, product: Product) => {
  //   setProductId(alias);
  //   dispatch(getAlias(alias));
  //   navigate("/product", {
  //     state: alias,
  //   });
  //   // dispatch(getProductById(product));
  // };

  // console.log(data);

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
                  {/* // onClick={() => handleClick(product.alias, product)}> */}
                  <Link
                    onClick={() => dispatch(getProductByAlias(product))}
                    to={`/product/${product.alias}`}>
                    {product.name_ru}
                  </Link>
                </h3>
                <button
                  className={styles.cardbtn}
                  onClick={() => addElement(product)}>
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
