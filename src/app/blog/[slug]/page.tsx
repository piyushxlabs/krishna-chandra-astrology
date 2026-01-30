import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, BlogPost } from "@/data/blog-posts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { Calendar, Clock, ChevronLeft, User, Share2 } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Article Not Found",
        };
    }

    return {
        title: `${post.title} | Pandit Krishna Chandra Jaguri`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["Pandit Krishna Chandra Jaguri"],
            images: [post.image],
        },
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <Header />
            <article className="min-h-screen pt-20 bg-[#FAF6F1]">
                {/* Breadcrumb & Navigation */}
                <div className="bg-white border-b border-border">
                    <Container className="py-4">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-sm text-text-secondary hover:text-primary transition-colors"
                        >
                            <ChevronLeft size={16} className="mr-1" /> Back to Articles
                        </Link>
                    </Container>
                </div>

                {/* Hero Section */}
                <div className="relative h-[400px] md:h-[500px] w-full">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12 text-white">
                        <Container className="text-center">
                            <FadeIn className="flex flex-col items-center">
                                <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                                    {post.category}
                                </span>
                                <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold mb-8 leading-tight max-w-4xl drop-shadow-2xl mx-auto">
                                    {post.title}
                                </h1>
                                <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-white/90 bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/10">
                                    <div className="flex items-center gap-2">
                                        <User size={18} />
                                        <span>{post.author.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={18} />
                                        <time dateTime={post.date}>
                                            {new Date(post.date).toLocaleDateString("en-US", {
                                                month: "long",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </time>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={18} />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </FadeIn>
                        </Container>
                    </div>
                </div>

                {/* Content Body */}
                <Container className="py-16">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Main Article */}
                        <div className="w-full lg:w-2/3">
                            <FadeIn delay={0.2}>
                                <div
                                    className="prose prose-lg prose-brown max-w-none 
                    prose-headings:font-serif prose-headings:text-secondary 
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-primary prose-blockquote:bg-surface-alt prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:italic
                    prose-img:rounded-xl prose-img:shadow-md"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                            </FadeIn>

                            {/* Share & Tags */}
                            <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
                                <span className="font-serif font-semibold text-secondary">Share this article:</span>
                                <div className="flex gap-4">
                                    <button className="p-2 bg-white rounded-full border border-border text-text-secondary hover:text-primary hover:border-primary transition-colors">
                                        <Share2 size={20} />
                                    </button>
                                    {/* Add actual share links here if needed */}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / Author */}
                        <aside className="w-full lg:w-1/3 space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8D5B7] sticky top-24">
                                <div className="text-center">
                                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#FAF6F1]">
                                        <Image
                                            src={post.author.image}
                                            alt={post.author.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-secondary mb-2">{post.author.name}</h3>
                                    <p className="text-sm text-text-secondary mb-6">{post.author.bio}</p>
                                    <Link href="/contact" className="w-full block">
                                        <Button className="w-full">Book Consultation</Button>
                                    </Link>
                                </div>
                            </div>

                            {/* CTA Card */}
                            <div className="bg-secondary p-8 rounded-2xl text-center text-[#FAF6F1]">
                                <h3 className="text-2xl font-serif font-bold mb-4">Want Personalized Guidance?</h3>
                                <p className="mb-6 text-white/80">
                                    Get a detailed analysis of your Janampatri and customized remedies.
                                </p>
                                <Link href="/contact">
                                    <Button variant="primary" className="w-full">Chat on WhatsApp</Button>
                                </Link>
                            </div>
                        </aside>

                    </div>
                </Container>

                {/* Related Posts */}
                <RelatedPosts currentPost={post} />
            </article>
            <Footer />
        </>
    );
}
