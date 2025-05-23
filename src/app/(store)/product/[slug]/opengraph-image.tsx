import { api } from '@/data/api';
import { Product } from '@/data/types/product';
import { env } from '@/env';
import Image from 'next/image';
import {ImageResponse} from 'next/og';
import colors from 'tailwindcss/colors';


export const runtime = 'edge';

export const alt = 'moletom-never-stop-learning';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

async function getProduct(slug: string): Promise<Product> {
    const response = await api(`/products/${slug}`, {
       next: {
        revalidate: 60 * 60, // 1 hour
       }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const product = await response.json();
    return product;
}

export default async function OgImage({params}: {params: {slug: string}}): Promise<ImageResponse> {

    const product = await getProduct(params.slug);

    const productImageUrl = new URL(product.image, env.APP_URL).toString();
    

    return new ImageResponse(
        (
            <div
                style={{
                    background: colors.zinc[950],
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                
                    <Image src={productImageUrl} alt='' style={{width: '100%'}}/>
                
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}