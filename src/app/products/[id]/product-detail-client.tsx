"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChatContainer } from "@/components/chat/ChatContainer";

interface Product {
    id: string;
    name: string;
    price: number;
    discountPrice: number;
    rating: number;
    reviews: number;
    seller: { name: string; rating: number };
    stock: string;
    description: string;
    specs: string[];
}

export function ProductDetailClient({ product, relatedProducts }: { product: Product, relatedProducts: any[] }) {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <>
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Image Gallery Mockup */}
                    <div className="space-y-6">
                        <div className="aspect-square rounded-3xl glass border border-border flex items-center justify-center text-muted-foreground text-lg font-medium overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                                Product Image (Main)
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square rounded-xl glass border border-border cursor-pointer hover:border-primary/50 transition-colors flex items-center justify-center text-xs">
                                    Img {i}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 border border-accent/30 text-accent text-[10px] font-bold uppercase tracking-[0.2em]">
                            Limited Sale
                        </div>

                        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight text-foreground">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-4 mb-8 text-sm">
                            <div className="flex items-center gap-1 text-secondary">
                                {"★".repeat(5)} <span className="ml-1 text-muted-foreground font-medium">({product.reviews} reviews)</span>
                            </div>
                            <div className="h-4 w-[1px] bg-border" />
                            <div className="text-muted-foreground font-medium">
                                Seller: <span className="text-primary hover:underline cursor-pointer font-bold">{product.seller.name}</span>
                            </div>
                        </div>

                        <div className="flex items-end gap-4 mb-8">
                            <div className="text-4xl font-display font-bold text-foreground">${product.discountPrice}</div>
                            <div className="text-xl text-muted-foreground line-through mb-1 font-medium">${product.price}</div>
                            <div className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-primary/20">20% OFF</div>
                        </div>

                        <p className="text-muted-foreground mb-12 leading-relaxed text-lg font-medium opacity-90">
                            {product.description}
                        </p>

                        <ul className="mb-12 space-y-3">
                            {product.specs.map((spec, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    {spec}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="flex-1 text-lg">Add to Cart</Button>
                            <Button size="lg" variant="outline" className="flex-1 text-lg" onClick={() => setIsChatOpen(true)}>
                                Chat with Seller
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products Section */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-display font-bold mb-12">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="group relative rounded-3xl p-4 glass hover:border-primary/50 transition-all cursor-pointer">
                                <div className="aspect-square rounded-2xl bg-muted/50 mb-4 flex items-center justify-center text-xs overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5" />
                                </div>
                                <h3 className="font-bold mb-1 truncate text-foreground">Related Item {i}</h3>
                                <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-wider mb-3">Verified Seller</p>
                                <div className="flex justify-between items-center">
                                    <span className="font-display font-bold text-lg text-foreground">$89.00</span>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full hover:bg-primary hover:text-white transition-all">
                                        +
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Chat Overlay */}
            <ChatContainer
                sellerName={product.seller.name}
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
            />
        </>
    );
}
