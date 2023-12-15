import React, { useState } from "react";
export default function NavBar() {
  const [cMenuTypes, setCMenuTypes] = useState(false);
  let i = 0;
  function ifMouseLeave() {
    setCMenuTypes(false);
  }
  const classTypeMenu =
    "flex flex-col px-6 py-4 absolute bg-white border uppercase ";
  let hiddenClassTypeMenu = `${
    !cMenuTypes
      ? classTypeMenu + " opacity-0 invisible pointer-events-none"
      : classTypeMenu
  }`;
  return (
    <header className="shadow-lg w-full">
      <div className="flex flex-row px-6 py-6 items-center justify-around max-w-7xl m-auto gap-x-3">
        <div className="flex items-center relative justify-end w-52">
          <img
            className="absolute left-0 w-28"
            src="src/assets/planter-pot.png"
            alt="logo image"
          />
          <p className="text-base uppercase font-bold">Planter Pot</p>
        </div>
        <div className="flex-1">
          <input
            name="search"
            type="search"
            placeholder="SEARCH"
            className="h-8 py-3 px-3 border outline-none w-full"
          />
        </div>
        <div className="flex gap-x-3">
          <button className="btn hover:bg-slate-300 active:bg-slate-300">
            LogIn
          </button>
          <button className="btn hover:bg-slate-300 active:bg-slate-300">
            SignIn
          </button>
        </div>
        <div className="flex flex-row items-center">
          <ul className="list-none flex gap-x-3  pr-4">
            <li>
              <a href="#" className="uppercase hover:text-slate-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="uppercase hover:text-slate-600">
                my account
              </a>
            </li>
            <li>
              <a href="#" className="uppercase hover:text-slate-600">
                contact
              </a>
            </li>
            <li
              className="relative transition uppercase hover:text-slate-600"
              onMouseOver={() => {
                setCMenuTypes(true);
              }}
              onMouseLeave={ifMouseLeave}
            >
              <a
                href="#"
                className="flex items-center"
                aria-expanded="true"
                aria-haspopup="menu"
              >
                Planter pots types
                <span className="material-symbols-outlined">expand_more</span>
              </a>
              <ul className={hiddenClassTypeMenu}>
                <li className=" py-2 border-b w-48">
                  <a href="#" className="text-slate-900">
                    Terracotta Pots
                  </a>
                </li>
                <li className="py-2 border-b w-48">
                  <a href="#" className="text-slate-900">
                    Plastic Pots
                  </a>
                </li>
                <li className=" py-2 border-b w-48">
                  <a href="#" className="text-slate-900">
                    Ceramic Pots
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div>
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="material-symbols-outlined">menu</span>
          </div>
        </div>
      </div>
    </header>
  );
}
