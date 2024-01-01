import React, { Fragment } from "react";
import { useSelector } from "react-redux";
export const Cart = () => {
  const productsData = useSelector((state) => state.productsData.data);
  console.log(productsData);
  return (
    <Fragment>
      <div>Cart page</div>
    </Fragment>
  );
};
