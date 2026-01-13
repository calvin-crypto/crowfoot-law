import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero-banner.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/50" /> {/* Overlay for readability */}
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-md">
                        Close the Deal. <br />
                        <span className="text-accent">Secure Your Investment.</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-100 mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow">
                        Premier real estate law services in Tennessee, Georgia, and South
                        Carolina. We provide efficient, expert counsel for closings,
                        litigation, and corporate matters.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="text-base bg-accent text-accent-foreground hover:bg-accent/90 border-0">
                            <Link href="/contact">Schedule Consultation</Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="text-base bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white backdrop-blur-sm"
                        >
                            <Link href="/services">Explore Services</Link>
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-4 text-sm font-medium text-white/90">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-primary border-2 border-white/20 flex items-center justify-center text-xs shadow-sm">TN</div>
                            <div className="w-8 h-8 rounded-full bg-primary border-2 border-white/20 flex items-center justify-center text-xs shadow-sm">GA</div>
                            <div className="w-8 h-8 rounded-full bg-primary border-2 border-white/20 flex items-center justify-center text-xs shadow-sm">SC</div>
                        </div>
                        <p className="drop-shadow-sm">Licensed in TN, GA, & SC</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
