import { Metadata } from "next";
import { ServicesIntro } from "@/components/sections/services/ServicesIntro";
import { ServiceDetail } from "@/components/sections/services/ServiceDetail";
import { GeneralInfo } from "@/components/sections/services/GeneralInfo";
import { PremiumCTA } from "@/components/sections/shared/PremiumCTA";
import { SERVICES_DATA } from "@/data/service-data";

export const metadata: Metadata = {
    title: "Astrology Services | Janampatri, Kundli Analysis, Consultations | Dehradun",
    description: "Complete astrology services: Janampatri banana, kundli analysis, personal consultations, bhavishya guidance. Contact for pricing.",
    openGraph: {
        title: "Astrology Services | Janampatri, Kundli Analysis, Consultations | Dehradun",
        description: "Complete astrology services: Janampatri banana, kundli analysis, personal consultations, bhavishya guidance. Contact for pricing.",
        url: "/services",
    },
    alternates: {
        canonical: "/services",
    },
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <ServicesIntro />
            <div className="flex flex-col gap-0">
                {SERVICES_DATA.map((service) => (
                    <ServiceDetail
                        key={service.id}
                        id={service.id}
                        title={service.title}
                        description={service.description}
                        scenarios={service.scenarios}
                        includes={service.includes}
                        process={service.process}
                        imageSrc={service.imageSrc}
                        align={service.align}
                    />
                ))}
            </div>
            <GeneralInfo />
            <PremiumCTA
                title="Confused kaunsi service choose karein?"
                subtitle="Humein message karein, hum aapki situation samajh kar sahi guidance denge."
                showSecondaryButton={false}
            />
        </main>
    );
}
