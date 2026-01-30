"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "@/data/blog-posts";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/layout/Container";

interface BlogListingProps {
    initialPosts: BlogPost[];
}

export function BlogListing({ initialPosts }: BlogListingProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Filtering Logic
    const filteredPosts = useMemo(() => {
        return initialPosts.filter((post) => {
            const matchesSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.content.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory =
                selectedCategory === "All" || post.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [initialPosts, searchQuery, selectedCategory]);

    return (
        <div className="py-16 md:py-24 bg-[#FAF6F1]">
            <Container>
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-primary font-serif italic text-lg mb-2 block">Our Knowledge Base</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
                            Explore Vedic Wisdom
                        </h2>
                    </div>
                    <BlogSearch
                        onSearch={setSearchQuery}
                        onCategoryChange={setSelectedCategory}
                        selectedCategory={selectedCategory}
                    />
                </FadeIn>

                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                        {filteredPosts.map((post, idx) => (
                            <BlogCard key={post.slug} post={post} index={idx} />
                        ))}
                    </div>
                ) : (
                    <FadeIn>
                        <div className="text-center py-20">
                            <p className="text-xl text-text-tertiary">
                                No articles found matching your criteria.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCategory("All");
                                }}
                                className="mt-4 text-primary font-semibold hover:underline"
                            >
                                Clear Filters
                            </button>
                        </div>
                    </FadeIn>
                )}
            </Container>
        </div>
    );
}
