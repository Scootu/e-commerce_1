import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartShopping = () => {
  const [showPanier, setShowPanier] = useState(false);
  const [content, setContent] = useState(
    <li className="text-[18px] ">Your cart is empty.</li>
  );
  const [counter, setCounter] = useState(0);
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
          {counter}
        </div>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
      {showPanier && (
        <div className="absolute smouthTran right-0 min-w-[260px] z-10 border shadow bg-white p-5 text-[#777] max-h-0 table text-center ">
          <ul>{content}</ul>
          {!counter == 0 && (
            <div className="py-0">
              <button className="block">See Cart</button>
              <button className="block">Order now!</button>
            </div>
          )}
        </div>
      )}
    </li>
  );
};
