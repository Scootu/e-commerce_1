import React, { Fragment, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartShopping } from "../CartShopping/CartShopping";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  const [cMenuTypes, setCMenuTypes] = useState(false);
  const [cLinkClass, setClinkType] = useState("home");
  const [isSticky, setIsSticky] = useState(false);
  function ifMouseLeave() {
    setCMenuTypes(false);
  }
  // const { params } = useParams(); dynamic router

  const menuClassLinks = "uppercase hover:text-slate-600";

  const classTypeMenu =
    "flex flex-col px-6 py-4 absolute bg-white border uppercase z-10";
  let hiddenClassTypeMenu = `${
    !cMenuTypes
      ? classTypeMenu + " opacity-0 invisible pointer-events-none"
      : classTypeMenu
  }`;
  let hrClassTypeMenu = "h-1.5 bg-red-500 rounded";
  const navbarRef = useRef(null);

  useEffect(() => {
    const navBar = navbarRef.current;
    console.log(navBar);
    // Create an array to store parallax elements
    const parallaxElements = [];

    // Function to add an element to the parallax array
    const addParallaxElement = (element, type, parallaxFactor) => {
      parallaxElements.push({
        element: element,
        type: type,
        parallaxFactor: parallaxFactor,
      });
    };
    //  addParallaxElement(navBar, "backgroundElement", 0.5);
    // Function to get the parallax type of an element

    // Function to calculate the parallax effect for each element
    const updateParallax = () => {
      parallaxElements.forEach((element) => {
        const type = element.type;
        const elementOffset = 600;
        const scrollTop = window.scrollY;
        let parallaxValue;

        switch (type) {
          case "backgroundImage":
            parallaxValue = scrollTop * element.parallaxFactor * -1;
            element.element.style.backgroundPosition = `50% ${parallaxValue}px`;
            break;
          case "backgroundElement":
            parallaxValue =
              scrollTop * element.parallaxFactor * -1 -
              elementOffset.height / 2;
            element.element.style.transform = `translate3d(0, ${parallaxValue}px, 0)`;
            break;
          case "element":
            parallaxValue = scrollTop * element.parallaxFactor * -1;
            element.element.style.transform = `translate3d(0, ${parallaxValue}px, 0)`;
            break;
        }
      });
    };
    function handleScroll() {
      let scroll = window.scrollY;

      if (scroll > 600) {
        navBar.classList.add("sticky");
        setIsSticky(true);
      } else {
        navBar.classList.remove("sticky");
        setIsSticky(false);
      }
    }

    // Add event listeners for scroll and resize events
    window.addEventListener("scroll", handleScroll);
    // window.addEventListener("resize", updateParallax);

    // Add all parallax elements to the array

    // Update the parallax effect initially
    // updateParallax();
    return () => {
      // window.removeEventListener("scroll", updateParallax);
      // window.removeEventListener("resize", updateParallax);
    };
  }, []); // The empty dependency array ensures that this effect runs once after the initial render
  return (
    <Fragment>
      {isSticky && <div className="h-[80px] w-full relative"></div>}
      <header className="shadow-lg w-full bg-white z-50" ref={navbarRef}>
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
              <li
                onClick={() => {
                  setClinkType("home");
                }}
              >
                <Link to={"/"} className="uppercase hover:text-slate-600">
                  Home
                </Link>
                <hr
                  className={
                    cLinkClass == "home"
                      ? hrClassTypeMenu
                      : "opacity-0 invisible pointer-events-none"
                  }
                ></hr>
              </li>
              <li
                onClick={() => {
                  setClinkType("shop");
                }}
              >
                <Link to={"shop"} className="uppercase hover:text-slate-600">
                  shop
                </Link>
                <hr
                  className={
                    cLinkClass == "shop"
                      ? hrClassTypeMenu
                      : "opacity-0 invisible pointer-events-none"
                  }
                ></hr>
              </li>
              <li
                className="relative transition uppercase hover:text-slate-600"
                onMouseOver={() => {
                  setCMenuTypes(true);
                }}
                onMouseLeave={ifMouseLeave}
                onClick={() => {
                  setClinkType("planter");
                }}
              >
                <Link
                  to={"/account"}
                  className="flex items-center justify-center gap-1 "
                >
                  account
                  <FontAwesomeIcon icon={faCaretDown} />
                </Link>
                <hr
                  className={
                    cLinkClass == "planter"
                      ? hrClassTypeMenu
                      : "opacity-0 invisible pointer-events-none"
                  }
                ></hr>
                <ul className={hiddenClassTypeMenu}>
                  <li className=" py-2 border-b w-48">
                    <Link
                      to="/cart"
                      className="text-slate-900 flex items-center "
                    >
                      Cart
                      <span className="material-symbols-outlined">
                        shopping_basket
                      </span>
                    </Link>
                  </li>
                  <li className=" py-2 border-b w-48">
                    <Link
                      to="/checkout"
                      className="text-slate-900 flex items-center "
                    >
                      Order now
                      <span className="material-symbols-outlined">
                        local_shipping
                      </span>
                    </Link>
                  </li>
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
              <li
                onClick={() => {
                  setClinkType("contact");
                }}
              >
                <Link to={"contact"} className="uppercase hover:text-slate-600">
                  contact
                </Link>
                <hr
                  className={
                    cLinkClass == "contact"
                      ? hrClassTypeMenu
                      : "opacity-0 invisible pointer-events-none"
                  }
                ></hr>
              </li>
              <CartShopping />
            </ul>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
