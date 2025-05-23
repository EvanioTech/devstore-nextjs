import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";
import { CartWidget } from "./cart-widget";
import SearchForm from "./search-form";

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

                <SearchForm />


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