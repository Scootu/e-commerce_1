import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const CartProduct = ({ id, img, category, title, price, reviews }) => {
  const [activeLinkCart, setActiveLinkCart] = useState("Add to cart");
  const [classLinkBtn, setClassLinkBtn] = useState("link-btn");

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
        <div className="bg-white mb-3">
          <p className="text-xs mb-1">{category}</p>
          <p className="text-text-blinder text-sm h-12 overflow-hidden leading-6">
            {title}
          </p>
          <div className="flex">
            <p className="text-black text-xl">{"$" + price}</p>
            <span className="">{}</span>
          </div>
        </div>
      </Link>
      <div className="h-[40px] w-full relative">
        {
          <button
            className={classLinkBtn}
            onClick={() => {
              setActiveLinkCart(<div className="loader"></div>);
              setTimeout(() => {
                setActiveLinkCart(
                  <NavLink
                    to={"/cart/product/4145"}
                    className="flex items-center gap-1 font-bold text-slate-800 hover:text-slate-500"
                  >
                    See Cart
                    <span className="material-symbols-outlined">
                      trending_flat
                    </span>
                  </NavLink>
                );
                setClassLinkBtn("link-btn-active");
              }, 2000);
            }}
          >
            {activeLinkCart}
          </button>
        }
      </div>
    </div>
  );
};
