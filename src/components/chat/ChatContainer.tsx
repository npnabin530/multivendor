"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
    id: string;
    text: string;
    sender: "user" | "seller";
    timestamp: Date;
}

export function ChatContainer({ sellerName, isOpen, onClose }: { sellerName: string; isOpen: boolean; onClose: () => void }) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");

    // Initialize messages on mount to avoid hydration mismatch
    useEffect(() => {
        setMessages([
            { id: "1", text: `Hi! I'm interested in the headset.`, sender: "user", timestamp: new Date() },
            { id: "2", text: `Hello! How can I help you today?`, sender: "seller", timestamp: new Date() },
        ]);
    }, []);

    const handleSend = () => {
        if (!inputValue.trim()) return;
        const newMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date(),
        };
        setMessages([...messages, newMessage]);
        setInputValue("");
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] z-[100] flex flex-col glass border border-white/20 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5">
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-primary/20">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-white shadow-lg">
                        {sellerName.charAt(0)}
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-white">{sellerName}</h3>
                        <p className="text-[10px] text-primary-foreground/70 font-medium">Online now</p>
                    </div>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white" aria-label="Close chat" title="Close chat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {messages.map((msg) => (
                    <div key={msg.id} className={cn("flex", msg.sender === "user" ? "justify-end" : "justify-start")}>
                        <div className={cn(
                            "max-w-[80%] p-3 rounded-2xl text-sm shadow-sm",
                            msg.sender === "user"
                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                : "glass border border-white/10 text-white rounded-tl-none"
                        )}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 glass-dark">
                <form
                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                    className="flex gap-2"
                >
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    />
                    <Button type="submit" size="icon" className="rounded-2xl h-10 w-10 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                    </Button>
                </form>
            </div>
        </div>
    );
}
