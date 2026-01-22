"use client";

import { Button } from "@/components/ui/button";
import {
    Settings,
    Shield,
    Mail,
    CreditCard,
    Globe,
    Bell,
    Database,
    Lock
} from "lucide-react";

export default function AdminSettingsPage() {
    const settingsSections = [
        {
            title: "General Settings",
            icon: Settings,
            items: [
                { label: "Platform Name", value: "MultiVendor", type: "text" },
                { label: "Support Email", value: "support@multivendor.np", type: "email" },
                { label: "Maintenance Mode", value: false, type: "toggle" },
            ]
        },
        {
            title: "Security",
            icon: Shield,
            items: [
                { label: "Two-Factor Authentication", value: true, type: "toggle" },
                { label: "Session Timeout (minutes)", value: "30", type: "number" },
                { label: "Password Policy", value: "Strong", type: "select" },
            ]
        },
        {
            title: "Payment Gateway",
            icon: CreditCard,
            items: [
                { label: "Default Gateway", value: "Stripe", type: "select" },
                { label: "Commission Rate (%)", value: "10", type: "number" },
                { label: "Minimum Payout", value: "Rs 1000", type: "text" },
            ]
        },
        {
            title: "Notifications",
            icon: Bell,
            items: [
                { label: "Email Notifications", value: true, type: "toggle" },
                { label: "SMS Notifications", value: false, type: "toggle" },
                { label: "Push Notifications", value: true, type: "toggle" },
            ]
        },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-4xl font-display font-bold mb-2 text-foreground">
                        Platform <span className="text-gradient">Settings</span>
                    </h1>
                    <p className="text-muted-foreground font-medium">
                        Configure and manage platform settings
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline">Reset to Default</Button>
                    <Button className="gap-2">
                        <Lock size={16} />
                        Save Changes
                    </Button>
                </div>
            </div>

            {/* Settings Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {settingsSections.map((section, idx) => {
                    const Icon = section.icon;
                    return (
                        <div key={idx} className="rounded-[40px] glass border border-border p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                    <Icon size={24} className="text-white" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground">{section.title}</h3>
                            </div>

                            <div className="space-y-4">
                                {section.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/50">
                                        <label className="text-sm font-bold text-foreground">{item.label}</label>
                                        {item.type === "toggle" ? (
                                            <button
                                                className={`relative w-12 h-6 rounded-full transition-colors ${item.value ? "bg-accent" : "bg-muted-foreground/30"
                                                    }`}
                                            >
                                                <span
                                                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${item.value ? "translate-x-6" : ""
                                                        }`}
                                                />
                                            </button>
                                        ) : item.type === "select" ? (
                                            <select className="bg-muted/50 border border-border rounded-xl px-3 py-1.5 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30">
                                                <option>{item.value}</option>
                                            </select>
                                        ) : (
                                            <input
                                                type={item.type}
                                                defaultValue={item.value as string}
                                                className="bg-muted/50 border border-border rounded-xl px-3 py-1.5 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 w-48 text-right"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* System Info */}
            <div className="rounded-[40px] glass border border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Database size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground">System Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-2xl bg-muted/30 border border-border/50">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Platform Version</div>
                        <div className="text-lg font-display font-bold text-foreground">v2.5.1</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30 border border-border/50">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Database Size</div>
                        <div className="text-lg font-display font-bold text-foreground">2.4 GB</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-muted/30 border border-border/50">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">Last Backup</div>
                        <div className="text-lg font-display font-bold text-foreground">2 hours ago</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
