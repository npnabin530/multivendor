import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartPage() {
    // Mock cart items grouped by seller
    const cartGroups = [
        {
            seller: "GameZone Nepal",
            items: [
                { id: 1, name: "HyperX Cloud II", price: 99, qty: 1 },
                { id: 2, name: "Mouse Pad XL", price: 20, qty: 2 },
            ]
        },
        {
            seller: "Fashion Hub",
            items: [
                { id: 3, name: "Slim Fit Jeans", price: 45, qty: 1 },
            ]
        }
    ];

    const subtotal = cartGroups.reduce((acc, g) => acc + g.items.reduce((s, i) => s + (i.price * i.qty), 0), 0);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-display font-bold mb-12">Your <span className="text-gradient">Cart</span></h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-8">
                            {cartGroups.map((group, idx) => (
                                <div key={idx} className="rounded-3xl glass border border-border p-8">
                                    <div className="flex items-center gap-2 mb-8 font-display font-semibold text-lg text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" /><path d="M10 9V5" /><path d="M14 9V5" /></svg>
                                        Seller: {group.seller}
                                    </div>

                                    <div className="space-y-6">
                                        {group.items.map((item) => (
                                            <div key={item.id} className="flex gap-6 items-center border-b border-border/50 pb-6 last:border-0 last:pb-0">
                                                <div className="w-24 h-24 rounded-2xl bg-muted/50 border border-border flex items-center justify-center text-[10px] text-muted-foreground text-center px-2 font-bold tracking-tighter">
                                                    ITEM IMAGE
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                                                    <div className="text-primary font-display font-bold">${item.price}</div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center border border-border rounded-full px-3 py-1 gap-4">
                                                        <button className="text-muted-foreground hover:text-primary transition-colors hover:scale-125" aria-label="Decrease quantity">-</button>
                                                        <span className="font-bold text-sm min-w-[20px] text-center">{item.qty}</span>
                                                        <button className="text-muted-foreground hover:text-primary transition-colors hover:scale-125" aria-label="Increase quantity">+</button>
                                                    </div>
                                                    <button className="p-2 text-muted-foreground hover:text-red-500 transition-colors" title="Remove item" aria-label="Remove item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary Panel */}
                        <div className="lg:col-span-1">
                            <div className="rounded-3xl glass border border-primary/20 p-8 sticky top-32 bg-primary/5">
                                <h3 className="text-xl font-display font-bold mb-6">Order Summary</h3>
                                <div className="space-y-4 mb-8 text-sm">
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Subtotal</span>
                                        <span className="font-bold text-foreground">${subtotal}</span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Estimated Shipping</span>
                                        <span className="font-bold text-foreground">$15</span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Tax</span>
                                        <span className="font-bold text-foreground text-accent italic">FREE</span>
                                    </div>
                                    <div className="h-[1px] bg-border my-4" />
                                    <div className="flex justify-between text-xl font-display font-bold">
                                        <span>Total</span>
                                        <span className="text-gradient">${subtotal + 15}</span>
                                    </div>
                                </div>

                                <Link href="/checkout">
                                    <Button size="lg" className="w-full text-lg shadow-xl shadow-primary/20">
                                        Proceed to Checkout
                                    </Button>
                                </Link>

                                <p className="mt-6 text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold">
                                    Secure Checkout Guaranteed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
