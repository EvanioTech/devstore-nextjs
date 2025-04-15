import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";



export function LoadingSkeleton( {className, ...props}: ComponentProps<"div">) {
  return (
    <div
      className={twMerge('bg-zinc-900 animate-pulse rounded-md', className)}
      {...props}
    >
      
    </div>
    
  );
}