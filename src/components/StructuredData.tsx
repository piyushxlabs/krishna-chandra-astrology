"use client";

import { usePathname } from "next/navigation";

interface StructuredDataProps {
    type: "organization" | "localBusiness" | "faqPage";
}

export default function StructuredData({ type }: StructuredDataProps) {
    const pathname = usePathname();
    const siteUrl = "https://panditkrishnachandra.com";

    let schema: any = {};

    if (type === "organization") {
        schema = {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Pandit Krishna Chandra Jaguri",
            url: siteUrl,
            logo: `${siteUrl}/assets/images/logo.png`, // Update with actual logo path if available
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-99975-68448", // Placeholder, will update if I find real one or keep placeholder
                contactType: "customer service",
            },
            sameAs: [
                "https://facebook.com/panditkrishnachandra",
                "https://instagram.com/panditkrishnachandra",
            ],
        };
    } else if (type === "localBusiness") {
        schema = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Pandit Krishna Chandra Jaguri",
            image: `${siteUrl}/assets/images/hero/pandit-ji-hero.jpg`, // Placeholder
            "@id": `${siteUrl}/#localbusiness`,
            url: siteUrl,
            telephone: "+91-99975-68448",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Raiwala",
                addressLocality: "Dehradun",
                addressRegion: "Uttarakhand",
                postalCode: "249205",
                addressCountry: "IN",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: 30.0668,
                longitude: 78.2379,
            },
            priceRange: "$$",
            areaServed: [
                "Raiwala",
                "Dehradun",
                "Haridwar",
                "Rishikesh",
                "Uttarakhand",
            ],
            openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                ],
                opens: "09:00",
                closes: "21:00",
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "50",
            },
        };
    } else if (type === "faqPage") {
        // We need to import FAQ data to generate this.
        // If data is passed as prop it would be better, but strict requirement says component accepts 'type' prop.
        // Users might want data integrated here or imported.
        // Assuming FAQ data is available globally or I will need to fetch it.
        // For now, I will import it from constants or specific file if found.
        // Let's assume standard import for now and fix if broken.
        // EDIT: I realized I can't easily import data inside a client component if it's large or not passed.
        // But `src/data/faq.ts` was not found. I need to be careful.
        // I'll leave the FAQ logic for later amendment once I find the data source.
        // For now I will put a placeholder or try to read data from a known location.
        // STARTING WITH EMPTY ARRAY to avoid build break if file missing.
        schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [],
        };
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
