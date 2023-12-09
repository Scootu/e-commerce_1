import React from "react";
export default function NavBar() {
  return (
    <div className="flex flex-row px-6 py-6 items-center justify-around shadow-lg">
      <div className="flex items-center">
        <img src="src/assets/react.svg" alt="logo image" />
        <p className="">Planter Pot</p>
      </div>

      <input
        name="search"
        type="search"
        placeholder="search"
        className="h-8 py-3 px-3"
      />
      <div className="flex flex-row ">
        <ul className="list-none flex">
          <li>Home</li>
        </ul>
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
    </div>
  );
}
