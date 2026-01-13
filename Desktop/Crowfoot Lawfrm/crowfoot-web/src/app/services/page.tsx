import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/services-data";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Our Practice Areas</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Comprehensive real estate legal services for homeowners, investors, and businesses across the Southeast.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(servicesData).map(([slug, service]) => (
                            <Link
                                key={slug}
                                href={`/services/${slug}`}
                                className="group relative flex flex-col p-8 bg-white border rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
                            >
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h2 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h2>
                                <p className="text-slate-600 mb-6 flex-1">
                                    {service.description}
                                </p>
                                <div className="flex items-center text-primary font-medium text-sm mt-auto">
                                    Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold mb-4">Not sure what you need?</h3>
                        <Button asChild size="lg">
                            <Link href="/contact">Contact Us for Guidance</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
