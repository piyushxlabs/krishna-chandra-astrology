import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SITE_CONFIG, NAVIGATION_LINKS } from "@/lib/utils/constants";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary text-[#FAF6F1] pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="font-serif text-2xl font-bold">{SITE_CONFIG.name}</h3>
                        <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                            {SITE_CONFIG.description}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg font-semibold text-primary">Quick Links</h4>
                        <ul className="space-y-2">
                            {NAVIGATION_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/80 hover:text-primary transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg font-semibold text-primary">Services</h4>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>Janampatri Creation</li>
                            <li>Kundli Analysis</li>
                            <li>Personal Consultation</li>
                            <li>Future Guidance</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-serif text-lg font-semibold text-primary">Contact</h4>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0" />
                                <span>{SITE_CONFIG.contact.address}</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 text-primary shrink-0" />
                                <span>{SITE_CONFIG.contact.phone}</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 text-primary shrink-0" />
                                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                                    {SITE_CONFIG.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
                    <p>© {new Date().getFullYear()} Pandit Krishna Chandra Jaguri. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
}
