"use client";

import { use } from "react";
import { useState } from "react";
import { notFound } from "next/navigation";
import productsData from "@/data/productsData";

export default function ProductPage({ params }) {

  // unwrap params promise
  const { slug } = use(params);

  const product = productsData.find(
    item => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  const [selectedCategory, setSelectedCategory] = useState(
    product.categories[0]
  );

  const [mainImage, setMainImage] = useState(
    product.categories[0].images[0]
  );

  return (
    <section className="pt-32 pb-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-5">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-[#1A52A2] mb-10">
          {product.title}
        </h1>

        <div className="grid lg:grid-cols-4 gap-8">

          {/* Sidebar */}
          <div className="bg-white rounded-3xl shadow p-6">

            <h2 className="text-xl font-bold mb-6">
              Categories
            </h2>

            <div className="space-y-3">

              {product.categories.map((category, index) => (

                <button
                  key={index}
                  onClick={() => {
                    setSelectedCategory(category);
                    setMainImage(category.images[0]);
                  }}
                  className="w-full text-left p-4 rounded-xl border hover:bg-[#1A52A2] hover:text-white duration-300"
                >
                  {category.name}
                </button>

              ))}

            </div>

          </div>

          {/* Right Side */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow p-8">

            {/* Main Image */}
            <img
              src={mainImage}
              alt=""
              className="w-full h-[500px] object-contain rounded-3xl"
            />

            {/* Thumbnail Images */}
            <div className="flex gap-4 flex-wrap mt-6">

              {selectedCategory.images.map((image, index) => (

                <img
                  key={index}
                  src={image}
                  alt=""
                  onClick={() => setMainImage(image)}
                  className="w-24 h-24 object-cover rounded-xl border cursor-pointer hover:border-red-500"
                />

              ))}

            </div>

            {/* Product Name */}
            <h2 className="text-3xl font-bold text-[#1A52A2] mt-10">
              {selectedCategory.name}
            </h2>

            {/* Description */}
            <p className="mt-5 text-gray-600 leading-8">
              {selectedCategory.description}
            </p>

            {/* Enquiry Button */}
            <a
              href="https://wa.me/917304251133"
              target="_blank"
              className="inline-block mt-8 px-8 py-4 bg-[#DA1F28] text-white rounded-full"
            >
              Enquiry Now
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}