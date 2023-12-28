import React from "react";
import { useLoaderData } from "react-router-dom";
import { CartProduct } from "../component/Product/CartProduct";
export const FeaturedProducts = () => {
  const data = useLoaderData();
  const swiperSlides = data.map((item) => {
    return (
      <swiper-slide key={item.id}>
        <CartProduct
          id={item.id}
          title={item.name}
          category={item.category}
          price={item.prices[0].price}
          img={item.images[0]}
        />
      </swiper-slide>
    );
  });

  return (
    <section className="max-w-7xl px-12 m-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-between w-full">
          <hr className="flex-1"></hr>
          <h2 className="text-4xl font-bold px-3">Featured Products</h2>
          <hr className="flex-1"></hr>
        </div>
        <div className="mt-4 inline-block h-1 w-24 bg-green-600" />
      </div>
      <swiper-container slides-per-view="4" speed="500" navigation="true">
        {swiperSlides}
      </swiper-container>
    </section>
  );
};
