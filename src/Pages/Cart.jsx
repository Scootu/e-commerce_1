import React from "react";
import { useSelector } from "react-redux";
import { Segments } from "../component/segments/Segments";
import { Table } from "../component/Table";
export const Cart = () => {
  const productsData = useSelector((state) => state.productsData.data);
  return (
    <section className="max-w-7xl px-12 m-auto">
      <Segments />
      <div className="py-[30px] w-full px-[15px] ">
        <div className="flex max-w-[1110px]">
          <div
            className="pt-0 px-[30px] pb-[30px] mb-0 max-w-[58.33%]"
            style={{ flexBasis: "58.333%" }}
          >
            <Table data={productsData} />
          </div>
          <div
            className="border-l border-l-[#ececec] pt-0 px-[30px] pb-[30px] mb-0 max-w-[41.66%] "
            style={{ flexBasis: "41.66%" }}
          ></div>
        </div>
        <div></div>
      </div>
    </section>
  );
};
