"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import { BlogCard } from "@/components/blog/BlogCard";

export default function BlogPreview() {
    const recentPosts = blogPosts.slice(0, 3);

    return (
        <section className="py-20 px-6 bg-[#FAF6F1]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-[#C9954D] font-medium tracking-wider uppercase text-sm">
                            Latest Wisdom
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4A3B2F] mt-2">
                            From Our Blog
                        </h2>
                        <p className="text-[#6B5E54] mt-4 max-w-xl">
                            Planetary movements, spiritual guidance, and insights to help you navigate life's journey.
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-[#C9954D] font-medium hover:text-[#B8843C] transition-colors pb-1 border-b border-[#C9954D]/30 hover:border-[#B8843C]"
                    >
                        Read All Articles
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
