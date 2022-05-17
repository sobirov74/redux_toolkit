import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

// interface Props{
//   data:
// }

const Product = () => {
  const product = useAppSelector((state) => state.product);
  const { id } = useParams();

  const element = product.data.find((data) => data.id === Number(id));
  console.log(element);

  return (
    <div>
      <div>
        <p>{element?.name_ru}</p>
        <img src={`${element?.image[0]}`} alt="" />
      </div>
    </div>
  );
};

export default Product;
