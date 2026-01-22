import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-display font-bold mb-12">Final <span className="text-gradient">Step</span></h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Form Side */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">1</span>
                                    Shipping Address
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="First Name" className="col-span-1 bg-muted/30 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                                    <input type="text" placeholder="Last Name" className="col-span-1 bg-muted/30 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                                    <input type="text" placeholder="City / District" className="col-span-2 bg-muted/30 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                                    <textarea placeholder="Specific Address (Street, House No, Landmark)" className="col-span-2 bg-muted/30 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[100px]" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm">2</span>
                                    Payment Method
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-2xl glass border border-primary/50 flex flex-col items-center gap-3 cursor-pointer bg-primary/5">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">Rs</div>
                                        <span className="text-sm font-bold">eSewa / Khalti</span>
                                    </div>
                                    <div className="p-4 rounded-2xl glass border border-border flex flex-col items-center gap-3 cursor-pointer hover:border-primary/30 transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                                        </div>
                                        <span className="text-sm font-bold text-muted-foreground">Card / UPI</span>
                                    </div>
                                    <div className="p-4 rounded-2xl glass border border-border col-span-2 flex items-center justify-center gap-4 cursor-pointer hover:border-primary/30 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
                                        <span className="text-sm font-bold">Cash on Delivery</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary Side */}
                        <div>
                            <div className="rounded-3xl glass border border-border p-8 bg-muted/5">
                                <h3 className="text-xl font-display font-bold mb-8">Summary</h3>
                                <div className="space-y-4 mb-10 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground">Items Price</span>
                                        <span className="font-bold text-lg">$164.00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground">Shipping Fee</span>
                                        <span className="font-bold text-lg">$15.00</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-y border-border/50 text-xl font-display font-bold">
                                        <span>Total Pay</span>
                                        <span className="text-gradient">$179.00</span>
                                    </div>
                                </div>

                                <Button size="lg" className="w-full text-lg h-16 shadow-2xl shadow-primary/20">
                                    Place Order Now
                                </Button>

                                <p className="mt-8 text-xs text-muted-foreground flex items-center justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                    Encrypted & Secure Payment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
