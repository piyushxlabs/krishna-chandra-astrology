import { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogListing } from "@/components/blog/BlogListing";

export const metadata: Metadata = {
    title: "Astrology Blog | Tips, Insights & Guidance | Pandit Krishna Chandra Jaguri",
    description: "Vedic astrology tips, planetary movements, festival dates, life guidance and practical insights in Hinglish.",
    openGraph: {
        title: "Astrology Blog | Tips, Insights & Guidance | Pandit Krishna Chandra Jaguri",
        description: "Vedic astrology tips, planetary movements, festival dates, life guidance and practical insights in Hinglish.",
        url: "/blog",
    },
    alternates: {
        canonical: "/blog",
    },
};

export default function BlogPage() {
    return (
        <main className="min-h-screen">
            <BlogHero />
            <BlogListing initialPosts={blogPosts} />
        </main>
    );
}
