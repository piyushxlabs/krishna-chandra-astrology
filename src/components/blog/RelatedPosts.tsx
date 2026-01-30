"use client";

import { BlogPost, blogPosts } from "@/data/blog-posts";
import { BlogCard } from "@/components/blog/BlogCard";
import { FadeIn } from "@/components/motion/FadeIn";

// Simple randomization helper since we don't have it inutils
function getRandomPosts(currentSlug: string, category: string, count: number = 3): BlogPost[] {
    const related = blogPosts.filter(p => p.category === category && p.slug !== currentSlug);
    const others = blogPosts.filter(p => p.category !== category && p.slug !== currentSlug);

    // Shuffle arrays (simple version)
    const shuffledRelated = related.sort(() => 0.5 - Math.random());
    const shuffledOthers = others.sort(() => 0.5 - Math.random());

    return [...shuffledRelated, ...shuffledOthers].slice(0, count);
}

export function RelatedPosts({ currentPost }: { currentPost: BlogPost }) {
    const posts = getRandomPosts(currentPost.slug, currentPost.category);

    if (posts.length === 0) return null;

    return (
        <section className="py-16 bg-[#F5EFE6]">
            <div className="container mx-auto px-4 max-w-7xl">
                <FadeIn>
                    <h2 className="text-3xl font-serif font-bold text-secondary mb-8 text-center">
                        You Might Also Like
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <BlogCard key={post.slug} post={post} index={idx} />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
