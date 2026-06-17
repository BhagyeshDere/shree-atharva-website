import productsData from "@/data/productsData";
import { notFound } from "next/navigation";

export default async function SubProductPage({ params }) {

  const { slug, subslug } = await params;

  const product = productsData.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  const subProduct = product.subCategories?.find(
    (item) => item.slug === subslug
  );

  if (!subProduct) {
    notFound();
  }

  return (
    <section className="pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-5">

        {/* Title */}
        <h1 className="text-5xl font-bold text-[#1A52A2] mb-10">
          {subProduct.title}
        </h1>

        {/* Main Image */}
        <img
          src={subProduct.image}
          alt={subProduct.title}
          className="w-full max-w-lg rounded-3xl"
        />

        {/* Description */}
        <p className="mt-8 text-gray-600 leading-8">
          {subProduct.shortDescription}
        </p>

      </div>

    </section>
  );
}