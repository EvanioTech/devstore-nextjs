import Link from "next/link";
import Image from "next/image";
import { api } from "@/data/api";
import { Product } from "@/data/types/product";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured");

  const products = await response.json();
  return products
}

export default  async function Home() {
  
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

  
  return (

<div className="grid max-h-[920px] grid-cols-9 grid-rows-6 gap-6">
<Link
href={`/product/${highlightedProduct.slug}`}
className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
>
  <Image src={highlightedProduct.image}
  alt="moletom-never-stop-learning 1"
  className="group-hover:scale-115 transition-transform duration-200 ease-in-out"
  width={920} 
  height={920} 
  quality={100}  />

  <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
  <span className="text-sm truncate">{highlightedProduct.title}</span>
  <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">{highlightedProduct.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}</span>
  </div>
</Link>

{otherProducts.map((product) => (
  <Link
  key={product.id}
  href={`/${product.slug}`}
  className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
  >
    <Image src={product.image}
    alt="moletom-never-stop-learning 1"
    className="group-hover:scale-115 transition-transform duration-200 ease-in-out"
    width={920} 
    height={920} 
    quality={100}  />

    <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
    <span className="text-sm truncate">{product.title}</span>
    <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">{product.price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}</span>
    </div>
  </Link>
))}

</div>
  );
}