"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { CATEGORIES } from "@/data/blog-posts";
import { Button } from "@/components/ui/Button";

interface BlogSearchProps {
    onSearch: (query: string) => void;
    onCategoryChange: (category: string) => void;
    selectedCategory: string;
}

export function BlogSearch({
    onSearch,
    onCategoryChange,
    selectedCategory,
}: BlogSearchProps) {
    const [query, setQuery] = React.useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <div className="space-y-6 mb-12">
            {/* Search Input */}
            <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-tertiary">
                    <Search size={18} />
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search articles (e.g., 'Mangal Dosh', 'Career')"
                    className="block w-full pl-10 pr-4 py-3 border border-[#E8D5B7] rounded-full leading-5 bg-white placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"
                />
                {query && (
                    <button
                        onClick={() => {
                            setQuery("");
                            onSearch("");
                        }}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-tertiary hover:text-secondary"
                    >
                        <X size={16} />
                    </button>
                )}
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
                {CATEGORIES.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                            selectedCategory === category
                                ? "bg-secondary text-[#FAF6F1] border-secondary shadow-md"
                                : "bg-white text-text-secondary border-transparent hover:bg-surface-alt hover:border-[#E8D5B7]"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}
