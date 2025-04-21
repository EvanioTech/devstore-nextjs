import {z} from "zod";
import data from "../data.json";
import type { NextApiRequest } from "next";

export async function GET(request: NextApiRequest) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    
   
  if (!request.url) {
    return Response.json({ error: "Invalid request URL" }, { status: 400 });
  }
  const { searchParams } = new URL(request.url);

  const query = z.string().parse(searchParams.get("query"));
  const products = data.products.filter((product) =>   product.title.toLowerCase().includes(query.toLowerCase())
  )
  

  return Response.json(products)

}
   