import { Navbar } from "@/components/layout/navbar";
import {
    Smartphone,
    Shirt,
    Home,
    Sparkles,
    Trophy,
    ShoppingBag,
    ChevronRight
} from "lucide-react";

const CATEGORIES = [
    { id: "electronics", name: "Electronics", icon: Smartphone, description: "Mobile, Laptops, Gadgets", count: 1200 },
    { id: "fashion", name: "Fashion", icon: Shirt, description: "Men, Women, Kids Wear", count: 4500 },
    { id: "home", name: "Home & Lifestyle", icon: Home, description: "Decor, Kitchen, Furniture", count: 2300 },
    { id: "beauty", name: "Beauty & Health", icon: Sparkles, description: "Makeup, Skincare, Wellness", count: 800 },
    { id: "sports", name: "Sports & Outdoor", icon: Trophy, description: "Gym, Hiking, Equipment", count: 500 },
    { id: "groceries", name: "Groceries", icon: ShoppingBag, description: "Fresh Produce, Snacks", count: 1500 },
];

export default function CategoriesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h1 className="text-4xl font-display font-bold mb-4 text-foreground">Browse <span className="text-gradient">Categories</span></h1>
                            <p className="text-muted-foreground max-w-xl font-medium">
                                Explore thousands of products across our curated categories from verified local and global sellers.
                            </p>
                        </div>
                        <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest bg-muted px-4 py-2 rounded-full border border-border/50">
                            {CATEGORIES.length} Major Sectors
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CATEGORIES.map((cat) => (
                            <div
                                key={cat.id}
                                className="group relative p-10 rounded-[40px] glass border border-border hover:border-primary/50 hover:bg-primary/[0.02] transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5"
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/[0.03] rounded-bl-full -z-10 group-hover:bg-primary/[0.08] transition-colors duration-700" />

                                <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                    <cat.icon size={28} strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl font-display font-bold mb-3 text-foreground group-hover:translate-x-1 transition-transform">
                                    {cat.name}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-8 leading-relaxed font-medium opacity-80 group-hover:opacity-100">
                                    {cat.description}
                                </p>

                                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
                                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                                        {cat.count.toLocaleString()} Items
                                    </span>
                                    <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                        Explore <ChevronRight size={14} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
