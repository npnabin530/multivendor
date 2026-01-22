"use client";

import {
    TrendingUp,
    Users,
    ShoppingBag,
    DollarSign,
    AlertCircle,
    CheckCircle,
    Clock,
    BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
    const adminStats = [
        {
            label: "Total Revenue",
            value: "Rs 1.2M",
            change: "+18.2%",
            positive: true,
            icon: DollarSign,
            color: "from-green-500 to-emerald-600"
        },
        {
            label: "Active Sellers",
            value: "842",
            change: "+12",
            positive: true,
            icon: Users,
            color: "from-blue-500 to-indigo-600"
        },
        {
            label: "Total Products",
            value: "12,458",
            change: "+245",
            positive: true,
            icon: ShoppingBag,
            color: "from-purple-500 to-pink-600"
        },
        {
            label: "Pending Approvals",
            value: "18",
            change: "-4",
            positive: true,
            icon: AlertCircle,
            color: "from-orange-500 to-red-600"
        },
    ];

    const recentActivity = [
        { type: "seller", action: "New seller registration", name: "TechHub Nepal", time: "2 min ago", status: "pending" },
        { type: "product", action: "Product approved", name: "Gaming Laptop RTX 4060", time: "15 min ago", status: "approved" },
        { type: "order", action: "High-value order", name: "Rs 45,000 - Electronics", time: "1 hour ago", status: "completed" },
        { type: "seller", action: "Seller verification", name: "Fashion Store KTM", time: "2 hours ago", status: "approved" },
    ];

    const topSellers = [
        { name: "GameZone Nepal", revenue: "Rs 245K", products: 156, rating: 4.8 },
        { name: "Fashion Hub", revenue: "Rs 198K", products: 234, rating: 4.9 },
        { name: "TechMart", revenue: "Rs 187K", products: 98, rating: 4.7 },
        { name: "Home Decor Pro", revenue: "Rs 156K", products: 189, rating: 4.6 },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-4xl font-display font-bold mb-2 text-foreground">
                        Admin <span className="text-gradient">Dashboard</span>
                    </h1>
                    <p className="text-muted-foreground font-medium">
                        Monitor and manage your marketplace ecosystem
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2">
                        <BarChart3 size={16} />
                        Export Report
                    </Button>
                    <Button className="gap-2">
                        <TrendingUp size={16} />
                        View Analytics
                    </Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {adminStats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={i}
                            className="relative p-6 rounded-[32px] glass border border-border group hover:border-primary/50 transition-all duration-300 overflow-hidden"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-full -z-10 group-hover:opacity-20 transition-opacity`} />

                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                                <Icon size={24} className="text-white" />
                            </div>

                            {/* Content */}
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                                {stat.label}
                            </div>
                            <div className="text-3xl font-display font-bold mb-2 text-foreground">
                                {stat.value}
                            </div>
                            <div className={`text-xs font-bold flex items-center gap-1 ${stat.positive ? 'text-accent' : 'text-primary'}`}>
                                <TrendingUp size={14} />
                                {stat.change} <span className="text-muted-foreground font-medium ml-1">this week</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Pending Verifications */}
                <div className="lg:col-span-2 rounded-[40px] glass border border-border p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-display font-bold text-foreground">Pending Seller Verifications</h3>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                            View All →
                        </Button>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between p-5 rounded-3xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center font-bold text-white text-xl">
                                        S{i}
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                                            Premium Store {i}
                                        </div>
                                        <div className="text-xs text-muted-foreground font-medium flex items-center gap-2 mt-1">
                                            <Clock size={12} />
                                            Applied 2 hours ago • Category: Fashion
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-white gap-1">
                                        <CheckCircle size={14} />
                                        Approve
                                    </Button>
                                    <Button size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                                        Reject
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="rounded-[40px] glass border border-border p-8">
                    <h3 className="text-xl font-display font-bold mb-6 text-foreground">Recent Activity</h3>
                    <div className="space-y-4">
                        {recentActivity.map((activity, i) => (
                            <div key={i} className="flex gap-3 pb-4 border-b border-border/30 last:border-0 last:pb-0">
                                <div className={`w-2 h-2 rounded-full mt-2 ${activity.status === 'pending' ? 'bg-orange-500' :
                                        activity.status === 'approved' ? 'bg-accent' :
                                            'bg-primary'
                                    }`} />
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-foreground">{activity.action}</div>
                                    <div className="text-xs text-muted-foreground mt-0.5">{activity.name}</div>
                                    <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mt-1">
                                        {activity.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Top Sellers */}
            <div className="rounded-[40px] glass border border-border p-8">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-display font-bold text-foreground">Top Performing Sellers</h3>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                        View All →
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {topSellers.map((seller, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-3xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white">
                                    #{i + 1}
                                </div>
                                <div className="flex items-center gap-1 text-xs font-bold text-secondary">
                                    ★ {seller.rating}
                                </div>
                            </div>
                            <div className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                {seller.name}
                            </div>
                            <div className="text-sm text-muted-foreground mb-3">
                                {seller.products} products
                            </div>
                            <div className="text-lg font-display font-bold text-accent">
                                {seller.revenue}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
