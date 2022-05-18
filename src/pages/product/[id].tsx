/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addItem } from "../../redux/reducers/cartSlice";
import getProduct from "../../utils/product";
import { Product } from "../../utils/types";
import styles from "./styles.module.css";

interface Props {
  id: string;
}

const ProductComp = () => {
  const { item } = useAppSelector((state) => state.getId);
  const { product } = useAppSelector((state) => state.prodByAlias);
  const dispatch = useAppDispatch();
  const param = useParams<string>();
  const alias = param.alias;
  useEffect(() => {
    if (!item.length) {
      dispatch(getProduct(alias));
    }
  }, [alias, dispatch, item.length]);

  const addElement = (product: Product) => {
    dispatch(addItem(product));
  };

  const handleToggle = () => {
    let toggle;
    if (!item.length) {
      return (toggle = product);
    }
    if (item.length) {
      return (toggle = item);
    }
  };
  const toggler: any = handleToggle();

  return (
    <div>
      <div>
        <p>{toggler[0]?.alias}</p>
        <img src={`${toggler[0]?.img[0]}`} alt="" />
        <button
          className={styles.cardbtn}
          onClick={() => addElement(toggler[0]?.product)}
        >
          to basket
        </button>
      </div>
    </div>
  );
};

export default ProductComp;
