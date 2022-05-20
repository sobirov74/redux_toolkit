/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import { addItem } from "redux/reducers/cartSlice";
// import { aliasSelector } from "redux/reducers/findByAliasSlice";
import { productAction } from "shared/redux/actions/productAction";
import { addItem } from "shared/redux/reducers/cartReducer";
import { aliasSelector } from "shared/redux/reducers/findByAliasSlice";
import productReducer, {
  productSelector,
} from "shared/redux/reducers/productReducer";
import { useAppDispatch, useAppSelector } from "shared/utils/hooks";
import getProduct from "utils/product";
import { Product } from "utils/types";
import styles from "./styles.module.css";

interface Props {
  id: string;
}

const ProductComp: FC = () => {
  const { item } = useAppSelector(aliasSelector);
  // const item = useAppSelector((state) => state.getId);
  // console.log(item);

  // const { product } = useAppSelector((state) => state.prodByAlias);
  const { product } = useAppSelector(productSelector);
  const dispatch = useAppDispatch();
  const param = useParams<string>();
  const alias: any = param.alias;

  const element = item.find((item: any) => item.product.alias === alias);

  useEffect(() => {
    if (!item.length) {
      dispatch(productAction(alias));
    }
  }, []);

  const addElement = (product: Product) => () => dispatch(addItem(product));

  const handleToggle = () => {
    let toggle;
    if (!item.length) {
      return (toggle = product);
    }
    if (item.length) {
      return (toggle = element);
    }
  };
  const toggler: any = handleToggle();

  //   return (
  //     <div>
  //       <div>
  //         <p>{product?.alias}</p>
  //         <img src={`${product?.image[0]}`} alt="" />
  //         <button
  //           className={styles.cardbtn}
  //           // onClick={addElement(toggler?.product)}
  //         >
  //           to basket
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div>
      <div>
        <p>{toggler?.alias}</p>
        <img src={`${toggler?.image[0]}`} alt="" />
        <button
          className={styles.cardbtn}
          // onClick={addElement(toggler?.product)}
        >
          to basket
        </button>
      </div>
    </div>
  );
};

export default ProductComp;
