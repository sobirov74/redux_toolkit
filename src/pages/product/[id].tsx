import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import getProduct from "../../utils/product";
// import { getProductById } from "../../redux/reducers/getProduct";

interface Props {
  id: string;
}

const Product = () => {
  const product = useAppSelector((state) => state.getId);
  const dispatch = useAppDispatch();
  const location = useLocation();

  // const item = useAppSelector((state) => state.getId);

  const params = location?.state as Props;

  const element = product.item;

  useEffect(() => {
    dispatch(getProduct(params));
    console.log("not found");
  }, []);

  return (
    <div>
      <div>
        <p>{element[0]?.alias}</p>
        <img src={`${element[0]?.img[0]}`} alt="" />
      </div>
    </div>
  );
};

export default Product;
