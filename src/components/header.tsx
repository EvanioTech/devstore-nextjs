import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";
import { CartWidget } from "./cart-widget";

export default function Header() {
    return (
        <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-5">
                <Link
                    href={"/"}
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                >
                    devstore
                </Link>

                <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
                    <Search className="w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        className="w-full bg-transparent text-sm text-zinc-500 placeholder:text-zinc-500 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="hidden"
                    >
                        Search
                    </button>
                </form>


            </div>



            <div
            className="flex items-center gap-4"
            >
                <CartWidget />
               
                <div className="w-px h-4 bg-zinc-700"/>
                <Link
                href={"/search"}
                className="flex items-center gap-2 hover:underline"
                >
                    <span className="text-sm">Account</span>
                    <Image
                        src="https://github.com/evaniotech.png"
                        alt="User Avatar"
                        className="h-6 w-6 rounded-full"
                        width={24}
                        height={24}
                    />

                </Link>
            </div>
           
        </div>
    )

}