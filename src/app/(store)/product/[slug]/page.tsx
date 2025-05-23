import { AddToCartButton } from "@/components/add-to-cart-button";
import { api } from "@/data/api";
import { Metadata } from "next";
import Image from "next/image";

interface ProductProps {
  params: {
    slug: string;
  };
}

async function getProduct(slug: string) {
  const response = await api(`/products/${slug}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const product = await response.json();
  return product;
}

export async function generateMetadata({ params }: ProductProps): Promise<Metadata> {
  const product = await getProduct(params.slug);
  return {
    title: product.title,
  };
}

export async function generateStaticParams() {
  const response = await api("/products/featured", );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const products = await response.json();
  return products.map((product: { slug: string }) => ({
    slug: product.slug,
  }));
}


export default async function ProductPage({ params }: ProductProps) {
 
  const product = await getProduct(params.slug);
  


  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt="moletom-never-stop-learning "
          className="group-hover:scale-115 transition-transform duration-200 ease-in-out"
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
            {product.title}
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
            {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
        <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5  font-semibold">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
        </span>
        <span className="text-sm text-zinc-400">
          {(product.price / 12).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}{" "}
          em até 12x sem juros
        </span>
        </div>

        <div className="mt-8 space-y-4">
            <span className="block font-semibold">Tamanhos</span>

            <div className="flex gap-2">
                <button type="button" className="rounded-full bg-zinc-900 px-5 py-2.5 font-semibold transition-colors hover:bg-zinc-800">
                    P
                </button>
                <button type="button" className="rounded-full bg-zinc-900 px-5 py-2.5 font-semibold transition-colors hover:bg-zinc-800">
                    M
                </button>
                <button type="button" className="rounded-full bg-zinc-900 px-5 py-2.5 font-semibold transition-colors hover:bg-zinc-800">
                    G
                </button>
                <button type="button" className="rounded-full bg-zinc-900 px-5 py-2.5 font-semibold transition-colors hover:bg-zinc-800">
                    GG
                </button>
            </div>
            <AddToCartButton productId={product.id} />
            
        </div>

      </div>
    </div>
  );
}