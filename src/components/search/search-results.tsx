"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

// Mock product data - in production, this would come from an API
const MOCK_PRODUCTS = [
    { id: 1, name: "HyperX Cloud II Gaming Headset", price: 99, category: "Electronics", seller: "GameZone Nepal", image: "/placeholder.jpg" },
    { id: 2, name: "Logitech G502 Gaming Mouse", price: 79, category: "Electronics", seller: "TechHub", image: "/placeholder.jpg" },
    { id: 3, name: "Mechanical Keyboard RGB", price: 129, category: "Electronics", seller: "GameZone Nepal", image: "/placeholder.jpg" },
    { id: 4, name: "Laptop Stand Aluminum", price: 45, category: "Electronics", seller: "Office Pro", image: "/placeholder.jpg" },
    { id: 5, name: "Wireless Earbuds Pro", price: 159, category: "Electronics", seller: "AudioMax", image: "/placeholder.jpg" },
    { id: 6, name: "USB-C Hub 7-in-1", price: 39, category: "Electronics", seller: "TechHub", image: "/placeholder.jpg" },
];

export function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";

    // Filter products based on search query
    const filteredProducts = MOCK_PRODUCTS.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.seller.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            {/* Search Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-display font-bold mb-2 text-foreground">
                    Search Results for <span className="text-gradient">"{query}"</span>
                </h1>
                <p className="text-muted-foreground font-medium">
                    Found {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-border">
                <Button variant="outline" size="sm" className="gap-2">
                    <Filter size={16} />
                    Category
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                    <SlidersHorizontal size={16} />
                    Price Range
                </Button>
                <Button variant="outline" size="sm">
                    Rating
                </Button>
                <Button variant="outline" size="sm">
                    Seller
                </Button>

                <div className="ml-auto flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Sort By:</span>
                    <select
                        className="bg-muted/50 border border-border rounded-full px-4 py-1.5 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                        aria-label="Sort products by"
                    >
                        <option>Relevance</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Newest</option>
                        <option>Rating</option>
                    </select>
                </div>
            </div>

            {/* Results Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className="group rounded-3xl p-5 glass border border-border hover:border-primary/50 transition-all cursor-pointer"
                        >
                            <div className="aspect-square rounded-2xl bg-muted/50 mb-4 flex items-center justify-center overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5" />
                            </div>
                            <h3 className="font-bold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                {product.name}
                            </h3>
                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-3">
                                {product.seller}
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="font-display font-bold text-xl text-foreground">
                                    ${product.price}
                                </span>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0 rounded-full hover:bg-primary hover:text-white transition-all"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // Add to cart logic
                                    }}
                                >
                                    +
                                </Button>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
                        <Filter size={40} className="text-muted-foreground" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3 text-foreground">No Results Found</h3>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                        We couldn't find any products matching "{query}". Try adjusting your search or browse our categories.
                    </p>
                    <Link href="/categories">
                        <Button>Browse Categories</Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
