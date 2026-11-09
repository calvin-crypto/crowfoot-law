import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinks = {
    services: [
        { name: "Real Estate Closings", href: "/services/residential-closings" },
        { name: "Litigation & Disputes", href: "/services/litigation" },
        { name: "Lender Services", href: "/services/lender-services" },
        { name: "Investor Services", href: "/services/investor-services" },
        { name: "Entrepreneur Services", href: "/services/entrepreneur-services" },
    ],
    company: [
        { name: "Home", href: "/" },
        { name: "About the Firm", href: "/attorneys" },
        { name: "J. Crowfoot Bio", href: "/attorneys" },
        { name: "FAQs", href: "/faqs" },
        { name: "Contact", href: "/contact" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Legal Disclaimer", href: "/legal-disclaimer" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary">Crowfoot Law Firm</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Premier real estate law services in Tennessee, Georgia, and South
                            Carolina. Efficient, expert counsel for closings, litigation,
                            and corporate matters.
                        </p>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
                        <address className="not-italic space-y-3 text-sm text-muted-foreground">
                            <p>651 E 4th Street Suite 200</p>
                            <p>Chattanooga, TN 37403</p>
                            <p className="pt-2">
                                <a href="tel:4044337435" className="hover:text-primary">
                                    (404) 433-7435
                                </a>
                            </p>
                            <p>
                                <a href="mailto:josh@crowfootlaw.com" className="hover:text-primary">
                                    josh@crowfootlaw.com
                                </a>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Crowfoot Law Firm. All rights reserved.</p>
                    <div className="flex gap-6">
                        {footerLinks.legal.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-xs text-muted-foreground text-center">
                    <p>
                        The information on this website is for informational purposes only and is not intended to advertise, provide legal advice, solicit clients, or create any attorney-client relationship.
                    </p>
                    <p className="mt-4">
                        Built by{" "}
                        <a
                            href="https://voiseai.com"
                            target="_blank"
                            rel="noopener"
                            className="font-medium hover:text-primary underline underline-offset-2"
                        >
                            VoiseAI
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
