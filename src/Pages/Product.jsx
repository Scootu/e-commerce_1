import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const loaderData = useLoaderData();
  console.log("loader : ", loaderData);
  const [activeLinkCart, setActiveLinkCart] = useState("Add to cart");
  const [classLinkBtn, setClassLinkBtn] = useState("btn-add-cart");
  const [counter, setCounter] = useState(1);
  return (
    <section className="max-w-7xl px-12 m-auto pt-12">
      <div className="flex">
        <div className="w-[140px] overflow-y-scroll max-h-[420px]">
          {loaderData.images.map((item, index) => (
            <div
              key={index}
              className="border overflow-hidden mb-[8px]"
              onMouseOver={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                className={`w-[100px] h-[100px] cursor-pointer ${
                  hoveredIndex === index ? "animate-scroll_Up" : "opacity-[0.5]"
                }`}
                src={item}
                alt="img"
              />
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="w-[650px]">
            <swiper-container slides-per-view="1" speed="500" navigation="true">
              {loaderData.images.map((item, index) => {
                return (
                  <swiper-slide key={index}>
                    <div className="flex items-center justify-center">
                      <img
                        className="bg-cover bg-center"
                        width="400"
                        height="400"
                        src={item}
                        alt="img"
                      />
                    </div>
                  </swiper-slide>
                );
              })}
            </swiper-container>
          </div>
          <div className="border rounded p-3">
            <p className="underline text-[#46474a] text-sm hover:text-[#0071DC]">
              {loaderData.category}
            </p>
            <p className="text-[1.25rem] text-[#2e2f32] leading-8 font-bold my-[0.25rem]">
              {loaderData.name}
            </p>
            <div className="flex flex-wrap mb-[1rem] h-auto ">
              <div className="flex items-center mr-[0.5rem] ">
                <div className="w-[60px] mr-[0.25rem] text-[#000] inline-flex items-center ">
                  <span
                    className="text-black inline-flex mr-[0.25rem]"
                    style={{ width: "60px" }}
                  >
                    <i
                      className="ld ld-StarFill "
                      style={{
                        fontSize: "12px",
                        verticalAlign: "-0.175em",
                        width: "12px",
                        height: "12px",
                        boxSizing: "content-box",
                      }}
                      aria-hidden="true"
                    >
                      &#9733;
                    </i>
                    <i
                      className="ld ld-StarFill "
                      style={{
                        fontSize: "12px",
                        verticalAlign: "-0.175em",
                        width: "12px",
                        height: "12px",
                        boxSizing: "content-box",
                      }}
                    >
                      &#9733;
                    </i>
                    <i
                      className="ld ld-StarFill "
                      style={{
                        fontSize: "12px",
                        verticalAlign: "-0.175em",
                        width: "12px",
                        height: "12px",
                        boxSizing: "content-box",
                      }}
                    >
                      &#9733;
                    </i>
                    <i
                      className="ld ld-StarFill "
                      style={{
                        fontSize: "12px",
                        verticalAlign: "-0.175em",
                        width: "12px",
                        height: "12px",
                        boxSizing: "content-box",
                      }}
                    >
                      &#9733;
                    </i>
                    <i
                      className="ld ld-StarHalf "
                      style={{
                        fontSize: "12px",
                        verticalAlign: "-0.175em",
                        width: "12px",
                        height: "12px",
                        boxSizing: "content-box",
                      }}
                    >
                      &#9733;
                    </i>
                  </span>
                  <span className="mr-1 text-[0.75rem] ">{`(${loaderData.reviews})`}</span>
                  <span className="underline whitespace-nowrap inline-block cursor-pointer text-[0.75rem] text-[#2e2f32] hover:no-underline hover:text-[#004f9a]">
                    150 reviews
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[1.75rem] text-[#2e2f32] leading-6 font-bold mb-[1rem]">
              {"$" + loaderData.prices[0].price}
            </p>
            <button
              className={classLinkBtn}
              onClick={() => {
                if (activeLinkCart == "Add to cart") {
                  setActiveLinkCart(<div className="loader"></div>);
                }
                setTimeout(() => {
                  setActiveLinkCart(
                    <div className="flex items-center justify-between w-full">
                      <FontAwesomeIcon icon={faMinus} onClick={()=>{

                      }} />
                      <span className="text-sm font-light">
                        {counter} x
                        <span className="ml-1 font-bold text-white">added</span>
                      </span>

                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                  );
                  /* dispatsh(getProductData(props.props));*/
                }, 2000);
              }}
            >
              {activeLinkCart}
            </button>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};
