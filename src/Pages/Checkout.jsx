import React, { Fragment, useEffect, useState } from "react";
import { Segments } from "../component/segments/Segments";
import { useSelector } from "react-redux";
import { Form, Link, useActionData } from "react-router-dom";

export const Checkout = () => {
  const productsData = useSelector((state) => state.productsData.data);
  const actionError = useActionData();
  const [clickCodePromo, setClickCodePromo] = useState(false);
  const [actionOk, setActionOk] = useState([{ ok: false, message: "" }]);
  const [actionErrorContent, setActionErrorContent] = useState("");
  const [clickLink, setClickLink] = useState(false);
  useEffect(() => {
    if (actionError) {
      setActionOk(actionError);
    }
  }, [actionError]);

  return (
    <section className="max-w-7xl px-12 m-auto">
      <Segments />
      {productsData.length == 0 ? (
        <div>
          <p className="mb-[1rem] text-[1.2rem]">
            Unable to order if your cart is empty.
          </p>
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
        </div>
      ) : (
        <div className="max-w-[1080px] mx-auto ">
          <div className="w-full mx-auto px-[30px]">
            <p className="text-[1.2em] text-[#777777] whitespace-nowrap pb-[0.5em]">
              <span>Do you have a promo code? </span>
              <span
                className="text-[#334862] hover:text-[#000] cursor-pointer"
                onClick={() => {
                  setClickLink(!clickLink);
                }}
              >
                Click here to enter your code
              </span>
            </p>
            {clickLink &&
              clickCodePromo &&
              (actionOk[0].ok ? (
                <p className="text-[1.05em] text-green-700 whitespace-nowrap pb-[0.5em]">
                  {actionOk[0].message}
                </p>
              ) : (
                <ul className="list-none">
                  {actionOk.map((p, index) => {
                    return (
                      <li
                        key={index}
                        className="text-[1.05em] text-red-600 whitespace-nowrap pb-[0.5em]"
                      >
                        {p.message}
                      </li>
                    );
                  })}
                </ul>
              ))}

            {clickLink && (
              <div className="pt-[15px] px-[30px] pb-[30px] mb-[1.3em]  border-dashed border-2 border-[#130754]">
                <p className="mb-[0.5em] text-[#777777] text-[1.2em]">
                  If you have a promo code, please apply it below.
                </p>
                <Form className="flex" method="POST">
                  <input
                    name="codePromo"
                    placeholder="Code promo"
                    className="w-full px-[0.75em] align-middle outline-none  mb-[1rem] text-[#444] whitespace-nowrap bg-white border border-[#ddd] text-[.97em] h-[2.507em] focus:shadow"
                    onChange={() => {
                      if (clickCodePromo) {
                        setClickCodePromo(false);
                      }
                    }}
                    readOnly={actionOk[0].ok}
                  ></input>
                  <button
                    type="submit"
                    name="intent"
                    value="codePromo"
                    className=" py-0 px-[1.5rem] mb-[1rem] text-[1rem] h-[2.5rem] flex w-max bg-[#0071dc] text-[#fff] font-bold items-center appearance-none border-0  cursor-pointer justify-center whitespace-nowrap uppercase"
                    onClick={() => {
                      setClickCodePromo(true);
                    }}
                  >
                    applies the promo code
                  </button>
                </Form>
              </div>
            )}
          </div>
          <div className="flex">
            <div
              className="pt-0 px-[30px] pb-[30px] mb-0 max-w-[63%]"
              style={{ flexBasis: "63%" }}
            >
              <div className="pt-[15px] border-t-2 border-t-[#ddd] ">
                <h3 className="text-[1.1em] font-bold pt-[10px] uppercase text-[#555555] mb-[0.5em] mt-0">
                  billing details
                </h3>
              </div>
              <Form method="POST">
                <div className="flex">
                  <p className="text-[0.9em] mr-[1em]">
                    <label className="text-[#222] font-bold mb-[0.4em] block">
                      First name *
                    </label>
                    <input
                      name="billing_first_name"
                      className="bg-white inputShadow text-[#333] outline-none outline-offset-2 border border-[#ddd] text-[0.97em] h-[2.7em] max-w-full px-[0.75em] mb-[1em] touch-manipulation "
                    />
                  </p>
                  <p className="text-[0.9em] ml-[1em]">
                    <label className="text-[#222] font-bold mb-[0.4em] block">
                      Last name *
                    </label>
                    <input
                      name="billing_Last_name"
                      className="bg-white inputShadow text-[#333] outline-none outline-offset-2 border border-[#ddd] text-[0.97em] h-[2.7em] max-w-full px-[0.75em] mb-[1em] touch-manipulation "
                    />
                  </p>
                </div>
                <p className="text-[0.9em]">
                  <label className="text-[#222] font-bold mb-[0.4em] block">
                    Name of company (optional)
                  </label>
                  <input
                    name="billing_Company_name"
                    className="w-full bg-white inputShadow text-[#333] outline-none outline-offset-2 border border-[#ddd] text-[0.97em] h-[2.7em] max-w-full px-[0.75em] mb-[1em] touch-manipulation "
                  />
                </p>
                <div className="flex">
                  <p className="text-[0.9em] mr-[1em]">
                    <label className="text-[#222] font-bold mb-[0.4em] block">
                      Address (optional)
                    </label>
                    <input
                      name="billing_address_1"
                      className="bg-white inputShadow text-[#333] outline-none outline-offset-2 border border-[#ddd] text-[0.97em] h-[2.7em] max-w-full px-[0.75em] mb-[1em] touch-manipulation "
                      placeholder="Lane number and street name"
                    />
                  </p>
                  <p className="text-[0.9em] ml-[1em] self-end">
                    <input
                      name="billing_address_2"
                      className="bg-white inputShadow text-[#333] outline-none outline-offset-2 border border-[#ddd] text-[0.97em] h-[2.7em] max-w-full px-[0.75em] mb-[1em] touch-manipulation "
                      placeholder="Building, apartment, lot, etc. (optional)"
                    />
                  </p>
                </div>
                <p className="text-[0.9em]">
                  <label className="text-[#222] font-bold mb-[0.4em] block">
                    Wilaya *
                  </label>
                  <select
                    className="px-[0.75em] w-full outline-none align-middle cursor-pointer  mb-[1rem] text-[#444] whitespace-nowrap bg-white border border-[#ddd] text-[.97em] h-[2.7em]"
                    placeholder="Région / Département"
                    name="billing_State"
                  >
                    <option value="DZ-01">Adrar</option>
                    <option value="DZ-02">Chlef</option>
                    <option value="DZ-03">Laghouat</option>
                    <option value="DZ-04">Oum El Bouaghi</option>
                    <option value="DZ-05">Batna</option>
                    <option value="DZ-06">Béjaïa</option>
                    <option value="DZ-07">Biskra</option>
                    <option value="DZ-08">Béchar</option>
                    <option value="DZ-09">Blida</option>
                    <option value="DZ-10">Bouira</option>
                    <option value="DZ-11">Tamanrasset</option>
                    <option value="DZ-12">Tébessa</option>
                    <option value="DZ-13">Tlemcen</option>
                    <option value="DZ-14">Tiaret</option>
                    <option value="DZ-15">Tizi Ouzou</option>
                    <option value="DZ-16">Alger</option>
                    <option value="DZ-17">Djelfa</option>
                    <option value="DZ-18">Jijel</option>
                    <option value="DZ-19">Sétif</option>
                    <option value="DZ-20">Saïda</option>
                    <option value="DZ-21">Skikda</option>
                    <option value="DZ-22">Sidi Bel Abbès</option>
                    <option value="DZ-23">Annaba</option>
                    <option value="DZ-24">Guelma</option>
                    <option value="DZ-25">Constantine</option>
                    <option value="DZ-26">Médéa</option>
                    <option value="DZ-27">Mostaganem</option>
                    <option value="DZ-28">M’Sila</option>
                    <option value="DZ-29">Mascara</option>
                    <option value="DZ-30">Ouargla</option>
                    <option value="DZ-31">Oran</option>
                    <option value="DZ-32">El Bayadh</option>
                    <option value="DZ-33">Illizi</option>
                    <option value="DZ-34">Bordj Bou Arréridj</option>
                    <option value="DZ-35">Boumerdès</option>
                    <option value="DZ-36">El Tarf</option>
                    <option value="DZ-37">Tindouf</option>
                    <option value="DZ-38">Tissemsilt</option>
                    <option value="DZ-39">El Oued</option>
                    <option value="DZ-40">Khenchela</option>
                    <option value="DZ-41">Souk Ahras</option>
                    <option value="DZ-42">Tipasa</option>
                    <option value="DZ-43">Mila</option>
                    <option value="DZ-44">Aïn Defla</option>
                    <option value="DZ-45">Naâma</option>
                    <option value="DZ-46">Aïn Témouchent</option>
                    <option value="DZ-47">Ghardaïa</option>
                    <option value="DZ-48">Relizane</option>
                  </select>
                </p>
                <p className="text-[0.9em] mr-[1em]">
                  <label className="text-[#222] font-bold mb-[0.4em] block">
                    City *
                  </label>
                  <input
                    name="billing_city"
                    className="bg-white inputShadow text-[#333] outline-none outline-offset-2 border border-[#ddd] text-[0.97em] h-[2.7em] max-w-full px-[0.75em] mb-[1em] touch-manipulation "
                  />
                </p>
                <p className="text-[0.9em] mr-[1em]">
                  <label className="text-[#222] font-bold mb-[0.4em] block">
                    Phone number *
                  </label>
                  <input
                    name="billing_phone"
                    className="bg-white inputShadow text-[#333] outline-none outline-offset-2 border border-[#ddd] text-[0.97em] h-[2.7em] max-w-full px-[0.75em] mb-[1em] touch-manipulation "
                  />
                </p>
                <p className="text-[0.9em] mr-[1em]">
                  <label className="text-[#222] font-bold mb-[0.4em] block">
                    Email
                  </label>
                  <input
                    name="billing_email"
                    className="bg-white inputShadow text-[#333] outline-none outline-offset-2 border border-[#ddd] text-[0.97em] h-[2.7em] max-w-full px-[0.75em] mb-[1em] touch-manipulation "
                  />
                </p>
                <p className="text-[0.95em]">
                  <input
                    name="ship_to_different_address"
                    className="mr-[0.5em]"
                    type="checkbox"
                    value={1}
                  />
                  <span className="text-[#222] ">
                    Ship to a different address ?
                  </span>
                </p>
                <p className="text-[0.9em] mr-[1em]">
                  <label className="text-[#222] font-bold mb-[0.4em] block">
                    Order Notes (optional)
                  </label>
                  <textarea
                    name="order_comments"
                    rows={"2"}
                    cols={"5"}
                    className=" h-[120px] w-full bg-white inputShadow text-[#333] outline-none outline-offset-2 border border-[#ddd] text-[1.1em]  p-[1em] mb-[1em] touch-manipulation "
                    placeholder="Comments regarding your order, e.g. delivery instructions."
                  ></textarea>
                </p>
              </Form>
            </div>
            <div
              className="h-full border rounded shadow border-[#ececec] pt-[15px] px-[15px] pb-[15px] mb-0 max-w-[37%] relative "
              style={{ flexBasis: "37%" }}
            ></div>
          </div>
        </div>
      )}
    </section>
  );
};
