export default function SellerDashboard() {
    const stats = [
        { label: "Total Sales", value: "Rs 45,200", change: "+12.5%", positive: true },
        { label: "Active Orders", value: "24", change: "+4", positive: true },
        { label: "Products", value: "156", change: "-2", positive: false },
        { label: "Followers", value: "1.2k", change: "+45", positive: true },
    ];

    return (
        <div className="space-y-12">
            <div>
                <h1 className="text-4xl font-display font-bold mb-2">Seller <span className="text-gradient">Dashboard</span></h1>
                <p className="text-muted-foreground">Welcome back! Here is what&apos;s happening with your store today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="p-8 rounded-[32px] glass border border-border group hover:border-primary/50 transition-all duration-300">
                        <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">{stat.label}</div>
                        <div className="text-3xl font-display font-bold mb-2">{stat.value}</div>
                        <div className={`text-xs font-bold ${stat.positive ? 'text-accent' : 'text-primary'}`}>
                            {stat.change} <span className="text-muted-foreground font-medium ml-1">since last month</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="rounded-[40px] glass border border-border p-10 h-[400px] flex flex-col">
                    <h3 className="text-xl font-display font-bold mb-8">Sales Overview</h3>
                    <div className="flex-1 rounded-3xl bg-primary/5 border border-dashed border-primary/20 flex items-center justify-center text-muted-foreground italic font-medium">
                        Chart Visualization Area
                    </div>
                </div>
                <div className="rounded-[40px] glass border border-border p-10 h-[400px] flex flex-col">
                    <h3 className="text-xl font-display font-bold mb-8">Recent Orders</h3>
                    <div className="flex-1 rounded-3xl bg-muted/30 border border-dashed border-border flex items-center justify-center text-muted-foreground italic font-medium">
                        Recent Orders List
                    </div>
                </div>
            </div>
        </div>
    );
}
