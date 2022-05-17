import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import getProduct from "../../utils/product";
// import { getProductById } from "../../redux/reducers/getProduct";

interface Props {
  id: string;
}

const Product = () => {
  const { data, cart } = useAppSelector((state) => state.product);
  const { item } = useAppSelector((state) => state.getId);
  // const { item } = useAppSelector((state) => state.fetchProduct);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const param = useParams<string>();
  const alias = param.alias;

  // const item = useAppSelector((state) => state.getId);
  console.log(data);

  // const params = location?.state as Props;

  // const aliasP = {...item};

  useEffect(() => {
    dispatch(getProduct(alias));
    console.log("not found");
  }, []);

  return (
    <div>
      <div>
        {/* <p>{item[0]?.alias}</p>
        <img src={`${item[0]?.img[0]}`} alt='' /> */}
      </div>
    </div>
  );
};

export default Product;
