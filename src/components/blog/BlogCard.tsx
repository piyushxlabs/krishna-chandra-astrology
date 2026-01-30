"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blog-posts";
import { Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { FadeIn } from "@/components/motion/FadeIn";

interface BlogCardProps {
    post: BlogPost;
    className?: string;
    index?: number;
}

export function BlogCard({ post, className, index = 0 }: BlogCardProps) {
    return (
        <FadeIn delay={index * 0.1}>
            <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article
                    className={cn(
                        "flex flex-col h-full bg-white rounded-xl overflow-hidden border border-[#E8D5B7] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg",
                        className
                    )}
                >
                    {/* Image Container */}
                    <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Logo Badge Overlay - Replicating design */}
                        <div className="absolute top-3 right-3 w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center p-2 shadow-md backdrop-blur-sm">
                            <span className="text-white font-serif font-bold text-xs">KC</span>
                        </div>
                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-secondary shadow-sm">
                            {post.category}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow p-6">
                        <div className="flex items-center gap-2 text-text-tertiary text-xs mb-3">
                            <Calendar size={14} />
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </time>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-xl font-serif font-bold text-secondary mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                        </h3>

                        <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                            {post.excerpt}
                        </p>

                        <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                            <span className="text-sm font-semibold text-primary group-hover:underline flex items-center gap-1">
                                Read More <ArrowRight size={16} />
                            </span>
                        </div>
                    </div>
                </article>
            </Link>
        </FadeIn>
    );
}
