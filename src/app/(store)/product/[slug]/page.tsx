import Image from "next/image";


export default function ProductPage() {
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/moletom-never-stop-learning.png"
          alt="moletom-never-stop-learning "
          className="group-hover:scale-115 transition-transform duration-200 ease-in-out"
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
           Moleton Never Stop Learning
        </h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
            O moleton mais confortável que você já viu, com um design
            inovador e uma mensagem inspiradora. Perfeito para qualquer
            ocasião, seja para estudar ou sair com os amigos.
        </p>

        <div className="mt-8 flex items-center gap-3">
        <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5  font-semibold">
            R$ 129,90
        </span>
        </div>

        <div className="mt-8 space-y-4">
            <span className="block font-semibold">Tamanhos</span>

            <div className="flex gap-2">
                <button className="rounded-full bg-zinc-900 px-5 py-2.5 font-semibold transition-colors hover:bg-zinc-800">
                    P
                </button>
                <button className="rounded-full bg-zinc-900 px-5 py-2.5 font-semibold transition-colors hover:bg-zinc-800">
                    M
                </button>
                <button className="rounded-full bg-zinc-900 px-5 py-2.5 font-semibold transition-colors hover:bg-zinc-800">
                    G
                </button>
                <button className="rounded-full bg-zinc-900 px-5 py-2.5 font-semibold transition-colors hover:bg-zinc-800">
                    GG
                </button>
            </div>
        </div>

      </div>
    </div>
  );
}