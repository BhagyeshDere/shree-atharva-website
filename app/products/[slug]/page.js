import productsData from "@/data/productsData";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {

  // Next.js 15+
  const { slug } = await params;

  const product = productsData.find(
    item => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <section className="pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-5">

        {/* Title */}
        <h1 className="text-5xl font-bold text-[#1A52A2]">
          {product.title}
        </h1>

        {/* Main Image */}
        {product.image && (
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-lg mt-10 rounded-3xl"
          />
        )}

        {/* Description */}
        {product.description && (
          <p className="mt-8 text-gray-600 leading-8">
            {product.description}
          </p>
        )}

        {/* Features */}
        {product.features?.length > 0 && (

          <div className="mt-10">

            <h2 className="text-2xl font-bold mb-6">
              Features
            </h2>

            <ul className="space-y-3">

              {product.features.map((feature, index) => (

                <li key={index}>
                  ✔ {feature}
                </li>

              ))}

            </ul>

          </div>

        )}

        {/* Sub Categories */}

        {product.subCategories?.length > 0 && (

          <>

            <h2 className="text-3xl font-bold mt-20 mb-10">
              Products
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {product.subCategories.map((item) => (

                <div
                  key={item.slug}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border hover:shadow-xl duration-300"
                >

                  {/* Image */}

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />

                  {/* Content */}

                  <div className="p-6">

                    <h3 className="text-xl font-bold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-5 line-clamp-2">
                      {item.shortDescription}
                    </p>

                    <Link
                      href={`/products/${product.slug}/${item.slug}`}
                    >
                      <button
                        className="bg-[#DA1F28] text-white px-5 py-3 rounded-full font-semibold hover:bg-red-700 duration-300"
                      >
                        View Product
                      </button>
                    </Link>

                  </div>

                </div>

              ))}

            </div>

          </>

        )}

      </div>

    </section>
  );
}