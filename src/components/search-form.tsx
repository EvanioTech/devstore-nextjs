'use client'

import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEvent, use } from "react"

export default function SearchForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const query = searchParams.get("q")

    function handleSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        
        const formData = new FormData(event.currentTarget)
        const query = formData.get("q")?.toString()

        if (!query) {
            return null
        }

        router.push(`/search?q=${encodeURIComponent(query)}`)
    }

    return (
        <form 
            onSubmit={handleSearch}
            className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
        >
            <Search className="w-5 h-5" />
            <input
                name="q"  // Adicionei o atributo name
                defaultValue={query ?? ""}
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
    )
}