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
                className="pt-0 px-[30px] pb-[30px] mb-0 max-w-[63%]"
                style={{ flexBasis: "63%" }}
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
                className="h-full border rounded shadow border-[#ececec] pt-[15px] px-[15px] pb-[15px] mb-0 max-w-[37%] "
                style={{ flexBasis: "37%" }}
              >
                <table className="w-full mb-[1rem] border-[#ececec] ">
                  <thead className="border-b-[3px]">
                    <tr className=" table-cell w-full  uppercase leading-[1.05rem] tracking-wider text-[1rem] text-[#777] font-bold   p-[0.25rem] ">
                      Total Cart
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-[1px] ">
                      <th className="text-left p-[0.25rem] table-cell text-[1.1rem] font-normal text-[#777] ">
                        sub-total
                      </th>
                      <td className="p-[0.25rem] table-cell font-bold">
                        $
                        {productsData
                          .reduce((previous, current) => {
                            return (
                              previous +
                              current.prices[0].price * current.nbItems
                            );
                          }, 0)
                          .toFixed(2)}
                      </td>
                    </tr>
                    <tr className="border-b-[1px]">
                      <th className="text-left p-[0.25rem] table-cell text-[1.1rem] font-normal text-[#777] ">
                        shipping
                      </th>
                      <td className="table-cell p-[0.25rem]">
                        <div className="text-[#777] w-max ">Free delivery</div>
                        <div className="text-[#777] w-max">
                          Delivery to{" "}
                          <span className="font-bold">Algiers.</span>
                        </div>
                        <div className="text-[#334862]  text-[.9rem] hover:text-[#000] cursor-pointer">
                          Change the address
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-[3px]">
                      <th className="text-left p-[0.25rem] table-cell text-[1.1rem] font-normal text-[#777] ">
                        Total
                      </th>
                      <td className="p-[0.25rem] font-bold">
                        $
                        {productsData
                          .reduce((previous, current) => {
                            return (
                              previous +
                              current.prices[0].price * current.nbItems
                            );
                          }, 0)
                          .toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  to={"/checkout"}
                  className="py-0 px-[1.5rem] mb-[1rem] text-[1rem] h-[2.5rem] flex w-full bg-[#0071dc] text-[#fff] font-bold items-center appearance-none border-0 rounded-[62.5rem] cursor-pointer justify-center whitespace-nowrap"
                >
                  Validated the order
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
