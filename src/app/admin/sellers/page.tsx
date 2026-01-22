"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Search,
    Filter,
    CheckCircle,
    XCircle,
    Eye,
    MoreVertical,
    TrendingUp
} from "lucide-react";

const SELLERS_DATA = [
    { id: 1, name: "GameZone Nepal", email: "contact@gamezone.np", status: "active", products: 156, revenue: "Rs 245K", rating: 4.8, joined: "2024-01-15", verified: true },
    { id: 2, name: "Fashion Hub", email: "info@fashionhub.np", status: "active", products: 234, revenue: "Rs 198K", rating: 4.9, joined: "2024-02-20", verified: true },
    { id: 3, name: "TechMart", email: "support@techmart.np", status: "pending", products: 0, revenue: "Rs 0", rating: 0, joined: "2024-03-10", verified: false },
    { id: 4, name: "Home Decor Pro", email: "hello@homedecor.np", status: "active", products: 189, revenue: "Rs 156K", rating: 4.6, joined: "2024-01-28", verified: true },
    { id: 5, name: "Sports Arena", email: "contact@sportsarena.np", status: "suspended", products: 67, revenue: "Rs 89K", rating: 4.2, joined: "2024-02-15", verified: true },
];

export default function AdminSellersPage() {
    const [filter, setFilter] = useState<"all" | "active" | "pending" | "suspended">("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredSellers = SELLERS_DATA.filter(seller => {
        const matchesFilter = filter === "all" || seller.status === filter;
        const matchesSearch = seller.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            seller.email.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-4xl font-display font-bold mb-2 text-foreground">
                        Seller <span className="text-gradient">Management</span>
                    </h1>
                    <p className="text-muted-foreground font-medium">
                        Manage and monitor all sellers on the platform
                    </p>
                </div>
                <Button className="gap-2">
                    <CheckCircle size={16} />
                    Approve All Pending
                </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-6 rounded-3xl glass border border-border">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Total Sellers</div>
                    <div className="text-3xl font-display font-bold text-foreground">{SELLERS_DATA.length}</div>
                </div>
                <div className="p-6 rounded-3xl glass border border-border">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Active</div>
                    <div className="text-3xl font-display font-bold text-accent">{SELLERS_DATA.filter(s => s.status === "active").length}</div>
                </div>
                <div className="p-6 rounded-3xl glass border border-border">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Pending</div>
                    <div className="text-3xl font-display font-bold text-orange-500">{SELLERS_DATA.filter(s => s.status === "pending").length}</div>
                </div>
                <div className="p-6 rounded-3xl glass border border-border">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Suspended</div>
                    <div className="text-3xl font-display font-bold text-red-500">{SELLERS_DATA.filter(s => s.status === "suspended").length}</div>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-wrap gap-4 items-center">
                <div className="flex gap-2">
                    {(["all", "active", "pending", "suspended"] as const).map((status) => (
                        <Button
                            key={status}
                            variant={filter === status ? "default" : "outline"}
                            size="sm"
                            onClick={() => setFilter(status)}
                            className="capitalize"
                        >
                            {status}
                        </Button>
                    ))}
                </div>
                <div className="flex-1 max-w-md relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                        type="text"
                        placeholder="Search sellers..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-muted/50 border border-border rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-foreground"
                    />
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                    <Filter size={16} />
                    More Filters
                </Button>
            </div>

            {/* Sellers Table */}
            <div className="rounded-[40px] glass border border-border overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-muted/30 border-b border-border">
                            <tr>
                                <th className="text-left p-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Seller</th>
                                <th className="text-left p-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Status</th>
                                <th className="text-left p-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Products</th>
                                <th className="text-left p-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Revenue</th>
                                <th className="text-left p-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Rating</th>
                                <th className="text-left p-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Joined</th>
                                <th className="text-right p-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredSellers.map((seller) => (
                                <tr key={seller.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white">
                                                {seller.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-foreground flex items-center gap-2">
                                                    {seller.name}
                                                    {seller.verified && (
                                                        <CheckCircle size={14} className="text-accent" />
                                                    )}
                                                </div>
                                                <div className="text-xs text-muted-foreground">{seller.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${seller.status === "active" ? "bg-accent/20 text-accent" :
                                                seller.status === "pending" ? "bg-orange-500/20 text-orange-500" :
                                                    "bg-red-500/20 text-red-500"
                                            }`}>
                                            {seller.status}
                                        </span>
                                    </td>
                                    <td className="p-4 font-bold text-foreground">{seller.products}</td>
                                    <td className="p-4 font-display font-bold text-foreground">{seller.revenue}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-1 font-bold text-secondary">
                                            ★ {seller.rating || "N/A"}
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-muted-foreground">{seller.joined}</td>
                                    <td className="p-4">
                                        <div className="flex justify-end gap-2">
                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                <Eye size={16} />
                                            </Button>
                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                <MoreVertical size={16} />
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
