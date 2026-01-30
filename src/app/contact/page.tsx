import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactIntro } from "@/components/sections/contact/ContactIntro";
import { ContactMethods } from "@/components/sections/contact/ContactMethods";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { LocationInfo } from "@/components/sections/contact/LocationInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Pandit Krishna Chandra Jaguri",
    description: "Get in touch with Pandit Krishna Chandra Jaguri via Phone, WhatsApp or visit our office in Raiwala, Dehradun.",
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-20">
                <ContactIntro />
                <ContactMethods />
                <ContactForm />
                <LocationInfo />
            </main>
            <Footer />
        </>
    );
}
