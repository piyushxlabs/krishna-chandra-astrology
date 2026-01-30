import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { FAQ_ITEMS } from "@/data/faq";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Astrology Services Dehradun",
    description: "Common questions about janampatri services, consultations, pricing, and process. Get clear answers before booking.",
    openGraph: {
        title: "Frequently Asked Questions | Astrology Services Dehradun",
        description: "Common questions about janampatri services, consultations, pricing, and process. Get clear answers before booking.",
        url: "/faq",
    },
    alternates: {
        canonical: "/faq",
    },
};

export default function FAQPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <StructuredData type="faqPage" />
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-serif font-bold text-[#4A3B2F] mb-4 text-center">Frequently Asked Questions</h1>
                <p className="text-[#6B5E54] text-center mb-12">
                    Finding clarity shouldn't be confusing. Here are answers to common questions about our services.
                </p>

                <div className="space-y-6">
                    {FAQ_ITEMS.map((item, index) => (
                        <div key={index} className="bg-[#FAF6F1] p-6 rounded-xl border border-[#E8D5B7]">
                            <h3 className="text-xl font-semibold text-[#4A3B2F] mb-3">{item.question}</h3>
                            <p className="text-[#6B5E54] leading-relaxed">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
