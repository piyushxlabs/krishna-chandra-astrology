import { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogListing } from "@/components/blog/BlogListing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "Astrology Blog & Insights | Pandit Krishna Chandra Jaguri",
    description:
        "Explore articles on Vedic Astrology, Kundli Matching, Vastu Shastra, and Planetary Transits. Expert guidance for modern life problems.",
};

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20">
                <BlogHero />
                <BlogListing initialPosts={blogPosts} />
            </main>
            <Footer />
        </>
    );
}
