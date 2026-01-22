"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, TrendingUp, Clock } from "lucide-react";

const TRENDING_SEARCHES = [
    "Gaming Headset",
    "Laptop",
    "Smartphone",
    "Fashion Wear",
    "Home Decor"
];

const RECENT_SEARCHES_KEY = "multivendor_recent_searches";

export function SearchBar() {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
    const searchRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        // Load recent searches from localStorage
        const stored = localStorage.getItem(RECENT_SEARCHES_KEY);
        if (stored) {
            setRecentSearches(JSON.parse(stored));
        }

        // Close dropdown when clicking outside
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearch = (searchQuery: string) => {
        if (!searchQuery.trim()) return;

        // Add to recent searches
        const updated = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
        setRecentSearches(updated);
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));

        // Navigate to search results
        router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        setIsOpen(false);
        setQuery("");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSearch(query);
    };

    const handleSuggestionClick = (suggestion: string) => {
        setQuery(suggestion);
        handleSearch(suggestion);
    };

    const clearRecentSearches = () => {
        setRecentSearches([]);
        localStorage.removeItem(RECENT_SEARCHES_KEY);
    };

    return (
        <div ref={searchRef} className="relative w-full">
            <form onSubmit={handleSubmit} className="relative">
                <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                    size={18}
                />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsOpen(true)}
                    placeholder="Search products, brands, sellers..."
                    className="w-full bg-muted/50 border border-border rounded-full pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
                />
            </form>

            {/* Search Dropdown */}
            {isOpen && (
                <div className="absolute top-full mt-2 w-full glass-dark border border-border rounded-3xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                    {query.trim() ? (
                        <div className="p-4">
                            <button
                                onClick={() => handleSearch(query)}
                                className="w-full text-left px-4 py-3 rounded-2xl hover:bg-primary/10 transition-colors flex items-center gap-3 text-foreground"
                            >
                                <Search size={16} className="text-primary" />
                                <span className="font-medium">Search for "{query}"</span>
                            </button>
                        </div>
                    ) : (
                        <div className="p-4 space-y-6">
                            {/* Recent Searches */}
                            {recentSearches.length > 0 && (
                                <div>
                                    <div className="flex justify-between items-center mb-3 px-2">
                                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                            <Clock size={12} />
                                            Recent
                                        </div>
                                        <button
                                            onClick={clearRecentSearches}
                                            className="text-[10px] text-primary hover:underline font-bold uppercase"
                                        >
                                            Clear
                                        </button>
                                    </div>
                                    <div className="space-y-1">
                                        {recentSearches.map((search, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleSuggestionClick(search)}
                                                className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-primary/10 transition-colors text-sm text-foreground font-medium"
                                            >
                                                {search}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Trending Searches */}
                            <div>
                                <div className="flex items-center gap-2 mb-3 px-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                    <TrendingUp size={12} />
                                    Trending
                                </div>
                                <div className="space-y-1">
                                    {TRENDING_SEARCHES.map((search, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleSuggestionClick(search)}
                                            className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-primary/10 transition-colors text-sm text-foreground font-medium flex items-center justify-between group"
                                        >
                                            <span>{search}</span>
                                            <Search size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
