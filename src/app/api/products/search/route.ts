import {z} from "zod";
import data from "../data.json";
import type { NextApiRequest } from "next";

export async function GET(request: NextApiRequest) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!request.url) {
        throw new Error("Request URL is undefined");
    }
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const query = searchParams.get("q");

    const querySchema = z.string().min(1, "Query cannot be empty");
    const parsedQuery = querySchema.parse(query);

    const filteredProducts = data.products.filter((product) =>
        product.title.toLowerCase().includes(parsedQuery.toLowerCase())
    );

    return new Response(JSON.stringify(filteredProducts), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=3600", // Cache for 1 hour
        },
    });
}