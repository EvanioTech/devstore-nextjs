import { z } from "zod";
import data from "../data.json";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const slug = z.string().parse(params.slug);
    const product = data.products.find((product) => product.slug === slug);
    if (!product) {
        return new Response("Product not found", { status: 404 });

    }

    return new Response(JSON.stringify(product), {
        status: 200,
        headers: {
            "Content-Type": "application/json", 
            "Cache-Control": "public, max-age=3600", // Cache for 1 hour
        },
    });
    


        }