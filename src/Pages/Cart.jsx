import React from "react";
import { useSelector } from "react-redux";
import { Segments } from "../component/segments/Segments";
import { CartProductLIst } from "../component/CartProductLIst";
import { Link } from "react-router-dom";

export const Cart = () => {
  const productsData = useSelector((state) => state.productsData.data);

  return (
    <section className="max-w-7xl px-12 m-auto">
      <Segments />
      <div className="py-[30px] w-full px-[15px] ">
        <div className="flex max-w-[1110px]">
          {productsData.length == 0 ? (
            <div className="w-full">
              <div className="mb-[1rem] text-[1.5rem] text-center">
                Your cart is empety right now.
              </div>
              <Link
                className={
                  "py-0 px-[1.5rem] mb-[1rem] mx-auto  text-[1rem] h-[2.5rem] flex w-[200px] bg-[#0071dc] text-[#fff] font-bold items-center appearance-none border-0 rounded-[62.5rem] cursor-pointer justify-center whitespace-nowrap"
                }
                to={"/"}
              >
                Back to shop
              </Link>
            </div>
          ) : (
            <>
              <div
                className="pt-0 px-[30px] pb-[30px] mb-0 max-w-[70%]"
                style={{ flexBasis: "70%" }}
              >
                {/* <Table data={productsData} /> */}
                <div className="font-bold pb-[1rem]">
                  {productsData.reduce((previous, current) => {
                    return previous + current.nbItems;
                  }, 0)}{" "}
                  items
                </div>
                <ul className="max-h-[500px] overflow-y-scroll">
                  {productsData.map((item, index) => {
                    return <CartProductLIst key={index} {...item} />;
                  })}
                </ul>
              </div>
              <div
                className="border-l border-l-[#ececec] pt-0 px-[30px] pb-[30px] mb-0 max-w-[30%] "
                style={{ flexBasis: "30%" }}
              >
                <table className="w-full mb-[1rem] border-[#ececec] ">
                  <thead>
                    <tr className="uppercase leading-[1.05rem] tracking-wider text-[1rem] text-[#777] font-bold  border-b-[3px] p-[0.5rem] ">
                      Total Cart
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="p-[20px]">
                      <th className="text-left ">Sous-total</th>
                      <td>0000</td>
                    </tr>
                    <tr>
                      <th>Expédition</th>
                      <td>livrison a alger</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>0000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
