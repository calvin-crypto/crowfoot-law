import Link from "next/link";
import { ArrowRight, Home, Building2, Gavel, Handshake, Landmark, Briefcase } from "lucide-react";

const services = [
    {
        icon: Home,
        title: "Residential Closings",
        description: "Seamless closing experiences for buyers, sellers, and agents.",
        href: "/services/residential-closings",
    },
    {
        icon: Building2,
        title: "Commercial Real Estate",
        description: "Expert guidance on acquisitions, leasing, and development.",
        href: "/services/commercial-real-estate",
    },
    {
        icon: Gavel,
        title: "Litigation & Disputes",
        description: "Resolving boundary, title, and contract disputes effectively.",
        href: "/services/litigation",
    },
    {
        icon: Landmark,
        title: "Lender Services",
        description: "Title insurance and closing services for financial institutions.",
        href: "/services/lender-services",
    },
    {
        icon: Handshake,
        title: "Investor Services",
        description: "Scalable legal solutions for real estate portfolios.",
        href: "/services/investor-services",
    },
    {
        icon: Briefcase,
        title: "Entrepreneur Services",
        description: "Entity formation and contract drafting for new businesses.",
        href: "/services/entrepreneur-services",
    },
];

export function ServicesGrid() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">
                        Comprehensive Real Estate Legal Services
                    </h2>
                    <p className="text-muted-foreground">
                        From the closing table to the courtroom, we protect your interests in every transaction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group relative flex flex-col p-8 bg-background rounded-xl shadow-md border hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
                        >
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground mb-6 flex-1">
                                {service.description}
                            </p>
                            <div className="flex items-center text-primary font-medium text-sm mt-auto">
                                Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
