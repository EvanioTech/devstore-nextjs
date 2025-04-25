'use client'

import { LoadingSkeleton } from "@/components/skeleton"
import { useSearchParams } from "next/navigation"

export default function Loading() {

    const searchParams = useSearchParams()
    const query = searchParams.get('q')

   

    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm">
                resultados para: <span className="font-semibold">{query}</span>
            </p>

            <div className="grid grid-cols-3 gap-6">
               <LoadingSkeleton className="h-[380px]" />
               <LoadingSkeleton className="h-[380px]" />
               <LoadingSkeleton className="h-[380px]" />
               <LoadingSkeleton className="h-[380px]" />
               <LoadingSkeleton className="h-[380px]" />
               <LoadingSkeleton className="h-[380px]" />


                </div>
            </div>

            )

}