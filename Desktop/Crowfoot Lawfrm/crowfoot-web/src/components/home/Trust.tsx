import { Star } from "lucide-react";
import Link from "next/link";

export function Trust() {
    return (
        <section className="bg-slate-900 border-y border-slate-800 py-10 shadow-lg relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">

                    {/* Avvo Rating */}
                    <div className="flex items-center gap-4">
                        {/* Badge Placeholder */}
                        <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-slate-900 font-bold text-xs ring-4 ring-primary/20 shadow-lg shrink-0">
                            Avvo <br /> 10.0
                        </div>
                        <div>
                            <p className="font-bold text-white text-lg">Top Rated Attorney</p>
                            <a href="https://www.avvo.com/attorneys/30318-ga-djoshua-crowfoot-4477782.html" target="_blank" className="text-sm text-accent hover:text-accent/80 hover:underline font-medium">View Profile &rarr;</a>
                        </div>
                    </div>

                    <div className="hidden md:block w-px h-12 bg-slate-700" />

                    {/* Google / General Trust */}
                    <div className="flex items-center gap-4">
                        <div className="flex text-amber-500">
                            <Star className="h-6 w-6 fill-current" />
                            <Star className="h-6 w-6 fill-current" />
                            <Star className="h-6 w-6 fill-current" />
                            <Star className="h-6 w-6 fill-current" />
                            <Star className="h-6 w-6 fill-current" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-white text-lg">Trusted by Clients</p>
                            <p className="text-xs text-slate-400 font-medium">Across TN, GA, & SC</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
