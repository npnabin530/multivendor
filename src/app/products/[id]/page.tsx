import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { ProductDetailClient } from "./product-detail-client";

// Mock data for SEO meta tags
const product = {
    name: "HyperX Cloud II Gaming Headset",
    description: "Experience premium gaming audio with the HyperX Cloud II. Features 7.1 virtual surround sound and a detachable noise-cancelling microphone.",
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { id } = await params;
    return {
        title: product.name,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.description,
            images: ["/product-placeholder.png"],
        }
    };
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    // Fetch related products (mock for now, but utility is ready)
    const relatedProducts: any[] = [];

    // In a real app, you would fetch calculations from Prisma here
    // For now, we pass the mock product with the dynamic ID
    const displayProduct = {
        id,
        name: "HyperX Cloud II Gaming Headset",
        price: 120,
        discountPrice: 99,
        rating: 4.8,
        reviews: 245,
        seller: { name: "GameZone Nepal", rating: 4.5 },
        stock: "In Stock",
        description: "Experience premium gaming audio with the HyperX Cloud II. Features 7.1 virtual surround sound and a detachable noise-cancelling microphone.",
        specs: ["Durable aluminum frame", "Plug and Play for PC & Mac", "Memory foam ear cushions"],
    };

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <ProductDetailClient product={displayProduct} relatedProducts={relatedProducts} />
        </main>
    );
}
