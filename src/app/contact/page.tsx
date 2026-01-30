import { Metadata } from "next";
import { ContactIntro } from "@/components/sections/contact/ContactIntro";
import { ContactMethods } from "@/components/sections/contact/ContactMethods";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { LocationInfo } from "@/components/sections/contact/LocationInfo";

export const metadata: Metadata = {
    title: "Contact Pandit Krishna Chandra Jaguri | Astrology Consultations Dehradun",
    description: "WhatsApp, call, or message for astrology consultations. Based in Raiwala, Dehradun. 24-hour response guaranteed.",
    openGraph: {
        title: "Contact Pandit Krishna Chandra Jaguri | Astrology Consultations Dehradun",
        description: "WhatsApp, call, or message for astrology consultations. Based in Raiwala, Dehradun. 24-hour response guaranteed.",
        url: "/contact",
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <ContactIntro />
            <ContactMethods />
            <ContactForm />
            <LocationInfo />
        </main>
    );
}
