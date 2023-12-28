import React from "react";
import { Link } from "react-router-dom";

export const CartProduct = ({ id, img, category, title, price }) => {
  return (
    <div className="border shadow px-4 py-4">
      <Link to={`/shop/${id}`} className="h-full w-full">
        <img
          className="h-128 px-4 py-4"
          width={"247"}
          height={"296"}
          src={img}
          alt={title}
        />
        <div className="bg-white">
          <p className="text-xs mb-1">{category}</p>
          <p className="text-text-blinder text-sm h-12 overflow-hidden leading-6">
            {title}
          </p>
          <p className="text-black font-bold text-xs">{"$" + price}</p>
        </div>
      </Link>
    </div>
  );
};
