import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent -z-10" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider">
            Coming Soon: Nepal&apos;s Most Powerful Marketplace
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 tracking-tight max-w-4xl leading-[1.1]">
            The Ultimate <span className="text-gradient">Multi-Vendor</span> Ecosystem
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            Experience the future of e-commerce. A complete system for customers, sellers, and administrators with advanced features and premium design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button size="lg" className="w-full sm:w-auto">Shop Now</Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">Learn More</Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl text-center">
            <div className="p-8 rounded-2xl glass border border-border group hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-display font-bold text-primary mb-2">10k+</div>
              <div className="text-sm text-muted-foreground">Active Sellers</div>
            </div>
            <div className="p-8 rounded-2xl glass border border-border group hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-display font-bold text-primary mb-2">50k+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="p-8 rounded-2xl glass border border-border group hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-display font-bold text-primary mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">Monthly Visitors</div>
            </div>
            <div className="p-8 rounded-2xl glass border border-border group hover:border-primary/50 transition-all duration-300">
              <div className="text-3xl font-display font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="py-12 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-display font-bold text-gradient">MultiVendor</div>
          <div className="text-sm text-muted-foreground">
            © 2026 MultiVendor Systems. All rights reserved. Built for Nepal.
          </div>
        </div>
      </footer>
    </main>
  );
}
