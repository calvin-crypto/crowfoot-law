import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | Crowfoot Law Firm`,
        description: service.description,
    };
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pb-24">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/services" className="inline-flex items-center text-sm text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                    </Link>
                    <div className="flex items-center gap-6 mb-6">
                        <div className="h-16 w-16 rounded-xl bg-white/10 flex items-center justify-center text-white p-3 backdrop-blur-sm">
                            <service.icon className="h-8 w-8" />
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                            {service.title}
                        </h1>
                    </div>
                    <p className="text-xl text-slate-300 max-w-2xl">
                        {service.description}
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Main Content */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">What We Do</h2>
                        <div className="prose prose-slate max-w-none text-slate-700">
                            {service.content.map((paragraph, index) => {
                                // Simple parser for [text](url) links
                                const parts = paragraph.split(/(\[[^\]]+\]\([^)]+\))/g);
                                return (
                                    <p key={index} className="mb-6 leading-loose">
                                        {parts.map((part, i) => {
                                            const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                                            if (match) {
                                                return (
                                                    <Link
                                                        key={i}
                                                        href={match[2]}
                                                        className="text-primary hover:underline font-medium"
                                                    >
                                                        {match[1]}
                                                    </Link>
                                                );
                                            }
                                            return part;
                                        })}
                                    </p>
                                );
                            })}
                        </div>

                        <div className="mt-12 bg-slate-50 border rounded-2xl p-8">
                            <h3 className="text-xl font-bold mb-6 text-slate-900">Key Features & Coverage</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                                        <span className="text-slate-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Fee Tables */}
                        {service.feeTables && (
                            <div className="mt-12 space-y-12">
                                {service.feeTables.map((table, tIndex) => (
                                    <div key={tIndex} className="bg-white border rounded-2xl overflow-hidden shadow-sm">
                                        <div className="bg-slate-50 px-6 py-4 border-b">
                                            <h3 className="text-xl font-bold text-slate-900">{table.title}</h3>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm text-left">
                                                <thead className="text-xs text-slate-500 uppercase bg-slate-50/50 border-b">
                                                    <tr>
                                                        <th className="px-6 py-3 font-medium">Fee Type</th>
                                                        <th className="px-6 py-3 font-medium w-32">Buyer</th>
                                                        <th className="px-6 py-3 font-medium w-32">Seller</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-100">
                                                    {table.rows.map((row, rIndex) => (
                                                        <tr key={rIndex} className="hover:bg-slate-50/50">
                                                            <td className="px-6 py-4 font-medium text-slate-900">{row.label}</td>
                                                            <td className="px-6 py-4 text-slate-600">{row.buyer}</td>
                                                            <td className="px-6 py-4 text-slate-600">{row.seller}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        {table.note && (
                                            <div className="px-6 py-4 bg-slate-50/30 text-xs text-slate-500 border-t italic">
                                                {table.note}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-1/3 space-y-8">
                        <div className="bg-slate-50 border rounded-2xl p-8 sticky top-24">
                            <h3 className="text-xl font-bold mb-4 text-slate-900">Get Legal Help Today</h3>
                            <p className="text-slate-600 mb-6 text-sm">
                                Ready to move forward? Schedule a consultation with Attorney Crowfoot to discuss your needs.
                            </p>
                            <Button asChild size="lg" className="w-full">
                                <Link href="/contact">Schedule Consultation</Link>
                            </Button>
                            <p className="text-center text-xs text-slate-500 mt-4">
                                Licensed in TN, GA, & SC
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
