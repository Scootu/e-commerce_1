import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const CartShopping = () => {
  const data = useSelector((state) => state.productsData.data);
  const [showPanier, setShowPanier] = useState(false);

  return (
    <li
      onMouseOver={() => {
        setShowPanier(true);
      }}
      onMouseLeave={() => {
        setShowPanier(false);
      }}
      className="relative"
    >
      <div className="relative cursor-pointer ">
        <div className="absolute top-[-10px] right-[-12px] px-[2px] bg-[#f8d7a4] rounded-md">
          {data.length}
        </div>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
      {showPanier && (
        <div className="absolute smouthTran right-0 min-w-[260px] z-10 border shadow bg-white p-5 text-[#777] max-h-0 table text-center ">
          {data.length == 0 ? (
            <ul>
              <li className="text-[18px] ">Your cart is empty.</li>
            </ul>
          ) : (
            <>
              <ul>
                {data.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="border-b-2 h-[45x] flex items-center"
                    >
                      <div className="w-1/5">
                        <img
                          className="w-full h-full"
                          src={item.images[0]}
                          alt={item.name}
                        />
                      </div>
                      <div className="w-full">
                        <p>{item.name}</p>
                        <p>{item.prices[0].price}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="py-0">
                <button className="block p-2 bg-slate-800 w-[120px] text-white mb-2">
                  See Cart
                </button>
                <button className="block p-2 bg-red-700 w-[120px] text-white">
                  Order now!
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </li>
  );
};
