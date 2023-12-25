import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [cMenuTypes, setCMenuTypes] = useState(false);
  const [cLinkClass, setClinkType] = useState("home");
  function ifMouseLeave() {
    setCMenuTypes(false);
  }
  // const { params } = useParams(); dynamic router 

  const menuClassLinks = "uppercase hover:text-slate-600";

  const classTypeMenu =
    "flex flex-col px-6 py-4 absolute bg-white border uppercase z-10";
  let hiddenClassTypeMenu = `${!cMenuTypes
    ? classTypeMenu + " opacity-0 invisible pointer-events-none"
    : classTypeMenu
    }`;
  let hrClassTypeMenu = 'h-1.5 bg-red-500 rounded';
  return (
    <header className="shadow-lg w-full">
      <div className="flex flex-row px-6 py-6 items-center justify-around max-w-7xl m-auto gap-x-3">
        <div className="flex items-center relative justify-end w-52">
          <img
            className="absolute left-0 w-28"
            src="src/assets/planter-pot.png"
            alt="logo image"
          />
          <p className="text-base uppercase font-bold ">Planter Pot</p>
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
            <li onClick={() => { setClinkType("home") }}>
              <Link to={"/"} className="uppercase hover:text-slate-600">
                Home
              </Link>
              <hr className={cLinkClass == "home" ? hrClassTypeMenu : "opacity-0 invisible pointer-events-none"}></hr>
            </li>
            <li
              className="relative transition uppercase hover:text-slate-600"
              onMouseOver={() => {
                setCMenuTypes(true);
              }}
              onMouseLeave={ifMouseLeave}
              onClick={() => { setClinkType("planter") }}
            >
              <Link to={"/account"} className="flex items-center">
                Planter pots types
                <span className="material-symbols-outlined">expand_more</span>
              </Link>
              <hr className={cLinkClass == "planter" ? hrClassTypeMenu : "opacity-0 invisible pointer-events-none"}></hr>
              <ul className={hiddenClassTypeMenu}>
                <li className=" py-2 border-b w-48">
                  <Link to="/" className="text-slate-900 flex items-center ">
                    Watchlist
                    <span className="material-symbols-outlined">
                      shopping_bag
                    </span>
                  </Link>
                </li>
                <li className="py-2 border-b w-48">
                  <Link to="/" className="text-slate-900 flex items-center">
                    My account
                    <span className="material-symbols-outlined">
                      account_circle
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li onClick={() => { setClinkType("contact") }}>
              <Link to={"contact"} className="uppercase hover:text-slate-600">
                contact
              </Link>
              <hr className={cLinkClass == "contact" ? hrClassTypeMenu : "opacity-0 invisible pointer-events-none"}></hr>
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
