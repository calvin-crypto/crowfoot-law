import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function AttorneyBrief() {
    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Content */}
                    <div className="flex-1 order-2 lg:order-1">
                        <h2 className="text-3xl font-bold tracking-tight mb-6">
                            Meet Josh Crowfoot
                        </h2>
                        <div className="prose prose-invert max-w-none text-slate-300 space-y-4 mb-8">
                            <p>
                                As the Managing Attorney of Crowfoot Law Firm, I founded this practice on a simple principle:
                                <span className="text-white font-medium"> provide first-class service, thoughtful legal advice, and timely communication.</span>
                            </p>
                            <p>
                                With a background in real estate development (LL.M.) and brokerage, I understand the deal from all sides—not just the legal one. Whether you are closing on a home, negotiating a commercial lease, or facing a property dispute, you will work directly with me.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <Button asChild size="lg" className="bg-accent text-slate-900 hover:bg-accent/90">
                                <Link href="/attorneys">View Full Bio</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Image / Stats */}
                    <div className="flex-1 order-1 lg:order-2 flex justify-center">
                        <div className="relative w-72 h-96 sm:w-96 sm:h-[32rem] rounded-2xl overflow-hidden bg-slate-800 border-4 border-slate-700 shadow-2xl shrink-0">
                            <Image
                                src="/images/headshot-v4.png"
                                alt="Josh Crowfoot"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
