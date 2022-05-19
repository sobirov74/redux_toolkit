/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { addItem } from "redux/reducers/cartSlice";
import getProduct from "utils/product";
import { Product } from "utils/types";
import styles from "./styles.module.css";

interface Props {
  id: string;
}

const ProductComp: FC = () => {
  const { item } = useAppSelector((state) => state.getId);
  const { product } = useAppSelector((state) => state.prodByAlias);
  const dispatch = useAppDispatch();
  const param = useParams<string>();
  const alias = param.alias;

  const element = item.find((item) => item.product.alias === alias);

  useEffect(() => {
    if (!item.length) {
      dispatch(getProduct(alias));
    }
  }, []);

  const addElement = (product: Product) => () => dispatch(addItem(product));

  const handleToggle = () => {
    let toggle;
    if (!item.length) {
      return (toggle = product[0]);
    }
    if (item.length) {
      return (toggle = element);
    }
  };
  const toggler: any = handleToggle();

  return (
    <div>
      <div>
        <p>{toggler?.alias}</p>
        <img src={`${toggler?.img[0]}`} alt="" />
        <button
          className={styles.cardbtn}
          onClick={addElement(toggler?.product)}
        >
          to basket
        </button>
      </div>
    </div>
  );
};

export default ProductComp;
