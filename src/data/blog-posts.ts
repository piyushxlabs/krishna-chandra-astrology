import { article1 } from "./blog/posts/2026-planets";
import { article2 } from "./blog/posts/janampatri-decisions";
import { article3 } from "./blog/posts/uttarakhand-temples";
import { article4 } from "./blog/posts/kundli-matching";
import { article5 } from "./blog/posts/career-remedies";
import { article6 } from "./blog/posts/griha-pravesh";
import { article7 } from "./blog/posts/rahu-ketu";
import { article8 } from "./blog/posts/finance-solutions";
import { article9 } from "./blog/posts/love-arranged";
import { article10 } from "./blog/posts/saturn-transit";
import { article11 } from "./blog/posts/mangal-dosha";
import { article12 } from "./blog/posts/navratri-meaning";

export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    category: "Planetary Movements" | "Life Guidance" | "Spiritual & Travel" | "Relationships" | "Career & Finance" | "Vastu & Muhurat";
    date: string;
    readTime: string;
    image: string;
    content: string;
    author: {
        name: string;
        bio: string;
        image: string;
    };
};

export const blogPosts: BlogPost[] = [
    article1 as BlogPost,
    article2 as BlogPost,
    article3 as BlogPost,
    article4 as BlogPost,
    article5 as BlogPost,
    article6 as BlogPost,
    article7 as BlogPost,
    article8 as BlogPost,
    article9 as BlogPost,
    article10 as BlogPost,
    article11 as BlogPost,
    article12 as BlogPost
];

export const CATEGORIES = [
    "All",
    "Planetary Movements",
    "Life Guidance",
    "Relationships",
    "Career & Finance",
    "Vastu & Muhurat",
    "Spiritual & Travel"
];
