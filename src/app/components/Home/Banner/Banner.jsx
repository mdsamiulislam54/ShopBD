import React from "react";
import Container from "../../Container/Container";
import Image from "next/image";
import BannerImages from "@/app/accents/shopping.webp";

const Banner = () => {
  return (
    <section className="bg-white py-10">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Welcome to <span className="text-rose-600">ShopBD</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Discover the best products at unbeatable prices.
              <br className="hidden md:block" />
              Shop now and enjoy exclusive deals!
            </p>
            <button
              className="bg-rose-600 hover:bg-rose-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300 shadow-md"
            >
              Shop Now
            </button>
          </div>

          {/* Image Content */}
          <div className="flex-1 text-end">
            <Image
              src={BannerImages}
              alt="Shopping Banner"
              className=" object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
