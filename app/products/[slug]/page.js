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

            <h2 className="text-xl font-bold mb-6 text-gray-800">
              Categories
            </h2>

            <div className="space-y-3">

              {product.categories.map((category, index) => {
                const isSelected = selectedCategory.name === category.name;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCategory(category);
                      setMainImage(category.images[0]);
                    }}
                    className={`w-full text-left p-4 rounded-xl border font-medium transition-all duration-300 ${
                      isSelected
                        ? "bg-[#1A52A2] text-white border-[#1A52A2] shadow-md shadow-blue-900/10"
                        : "bg-white text-gray-600 border-gray-100 hover:bg-gray-50 hover:text-[#1A52A2]"
                    }`}
                  >
                    {category.name}
                  </button>
                );
              })}

            </div>

          </div>

          {/* Right Side */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow p-8">

            {/* Gallery Super-Grid: 12-column layout template balancing main view and side deck */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Main Image Viewport Box (Allocates 9 columns on desktop for strong focus) */}
              <div className="md:col-span-9 w-full h-[280px] sm:h-[340px] md:h-[400px] rounded-3xl overflow-hidden flex items-center justify-center group relative cursor-zoom-in order-1">
                <img
                  src={mainImage}
                  alt=""
                  className="w-full h-full object-contain rounded-3xl transition-transform duration-500 ease-out group-hover:scale-125 origin-center"
                />
              </div>

              {/* Sub Images Deck: Maintained on the right side using a clean 2-column wide grid on desktop to form a vertical 4x4 matrix layout block */}
              <div className="md:col-span-3 w-full order-2">
                <div className="grid grid-cols-4 md:grid-cols-2 gap-3">
                  {selectedCategory.images.map((image, index) => {
                    const isCurrentMain = mainImage === image;
                    return (
                      <img
                        key={index}
                        src={image}
                        alt=""
                        onClick={() => setMainImage(image)}
                        className={`w-full aspect-square object-cover rounded-xl border cursor-pointer transition-all duration-200 ${
                          isCurrentMain 
                            ? "border-[#DA1F28] ring-2 ring-[#DA1F28]/10 shadow-sm" 
                            : "border-gray-200 hover:border-[#1A52A2]"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>

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
              href={`/contact?product=${encodeURIComponent(selectedCategory.name)}&service=${encodeURIComponent(product.title)}`}
              className="inline-block mt-8 px-8 py-4 bg-[#DA1F28] text-white font-semibold rounded-full shadow-lg shadow-red-600/10 hover:bg-[#b8161e] hover:shadow-xl hover:shadow-red-600/20 active:scale-[0.99] transition-all duration-300"
            >
              Enquiry Now
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}