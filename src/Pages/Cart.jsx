import React from "react";
import { useSelector } from "react-redux";
import { Segments } from "../component/segments/Segments";
export const Cart = () => {
  const productsData = useSelector((state) => state.productsData.data);
  console.log(productsData);
  return (
    <section className="max-w-7xl px-12 m-auto">
      <Segments />
      <div className="py-[30px] w-full px-[15px] ">
        <div className="flex max-w-[1110px]">
          <div
            className="pt-0 px-[30px] pb-[30px] mb-0 max-w-[58.33%]"
            style={{ flexBasis: "58.333%" }}
          >
            <table className="w-full">
              <thead>
                <tr>
                  <th
                    className="tracking-wider leading-[1.05rem] p-[0.5rem] text-left text-[0.9em] whitespace-nowrap text-[#777] border-b-[3px] border-b-[#ececec] "
                    colSpan={4}
                  >
                    Product
                  </th>
                  <th className="tracking-wider leading-[1.05rem] p-[0.5rem] text-left text-[0.9em] whitespace-nowrap text-[#777] border-b-[3px] border-b-[#ececec] ">
                    PRICE
                  </th>
                  <th className="tracking-wider leading-[1.05rem] p-[0.5rem] text-left text-[0.9em] whitespace-nowrap text-[#777] border-b-[3px] border-b-[#ececec] ">
                    QUANTITY
                  </th>
                  <th className="tracking-wider leading-[1.05rem] p-[0.5rem] text-left text-[0.9em] whitespace-nowrap text-[#777] border-b-[3px] border-b-[#ececec] ">
                    Size and Color
                  </th>
                  <th className="tracking-wider leading-[1.05rem] p-[0.5rem] text-left text-[0.9em] whitespace-nowrap text-[#777] border-b-[3px] border-b-[#ececec] ">
                    SUBTOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                {productsData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="underline py-[15px]">re</td>
                      <td className=" py-[15px] text-[.9em]">
                        <img src={item.images[0]} alt="img" />
                      </td>
                      <td className=" py-[15px] text-[.9em]">{item.name}</td>
                      <td></td>
                      <td className=" py-[15px] text-[.9em]">
                        {item.prices[0].price}
                      </td>
                      <td className=" py-[15px] text-[.9em]">{item.nbItems}</td>
                      <td className=" py-[15px] text-[.9em]">
                        {item.prices[0].size}
                      </td>
                      <td className=" py-[15px] text-[.9em]">
                        {item.prices[0].price * item.nbItems}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div
            className="border-l border-l-[#ececec] pt-0 px-[30px] pb-[30px] mb-0 max-w-[41.66%] "
            style={{ flexBasis: "41.66%" }}
          ></div>
        </div>
      </div>
    </section>
  );
};
