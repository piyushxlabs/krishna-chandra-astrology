import { Container } from "@/components/layout/Container";
import { Star, MapPin, Users, Award } from "lucide-react";

const STATS = [
    {
        icon: Award,
        label: "10+ Years Experience",
        sub: "Proven Expertise"
    },
    {
        icon: MapPin,
        label: "Raiwala, Dehradun",
        sub: "& Nearby Areas"
    },
    {
        icon: Star,
        label: "5 Specialized Services",
        sub: "Tailored Guidance"
    },
    {
        icon: Users,
        label: "500+ Clients",
        sub: "Trusted Locally"
    }
];

export function TrustSignals() {
    return (
        <section className="bg-white border-b border-border py-12 relative z-30 -mt-8 md:-mt-12 mx-4 md:mx-auto max-w-[1240px] rounded-2xl shadow-xl">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {STATS.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center space-y-3">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <stat.icon size={24} />
                            </div>
                            <div>
                                <h3 className="font-serif font-bold text-lg text-secondary leading-tight">
                                    {stat.label}
                                </h3>
                                <p className="text-text-secondary text-sm">
                                    {stat.sub}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
