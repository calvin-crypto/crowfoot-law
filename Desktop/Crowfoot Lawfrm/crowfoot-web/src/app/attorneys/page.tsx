import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, BookOpen, GraduationCap, Users } from "lucide-react";

export const metadata = {
    title: "Josh Crowfoot, J.D., LL.M. | Crowfoot Law Firm",
    description: "Managing Attorney Josh Crowfoot specializes in real estate law, development, and litigation in TN, GA, and SC.",
};

export default function AttorneyPage() {
    return (
        <div className="bg-background min-h-screen pb-24">
            {/* Hero / Profile Header */}
            <section className="bg-slate-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="relative w-72 h-96 lg:w-96 lg:h-[32rem] rounded-2xl border-4 border-slate-700 bg-slate-800 overflow-hidden shrink-0 shadow-xl">
                            <Image
                                src="/images/attorney-profile-v2.png"
                                alt="Josh Crowfoot"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Josh Crowfoot, J.D., LL.M.</h1>
                            <p className="text-xl text-accent font-medium mb-6">Managing Attorney & Real Estate Broker</p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary-foreground ring-1 ring-inset ring-primary/30">
                                    Licensed in TN, GA, SC
                                </span>
                                <span className="inline-flex items-center rounded-full bg-slate-700 px-3 py-1 text-sm font-medium text-slate-300 ring-1 ring-inset ring-slate-600">
                                    LL.M. Real Property Development
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 max-w-4xl">

                {/* Bio */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 border-b pb-4">About Josh</h2>
                    <div className="prose prose-slate max-w-none text-slate-700 leading-loose">
                        <p>
                            Josh Crowfoot is the Managing Attorney of Crowfoot Law Firm. The firm aims to provide first-class service, thoughtful legal advice, and timely communication with its clients and agents.
                        </p>
                        <p>
                            With a unique background in real estate development and brokerage, Josh understands the deal from all sides—not just the legal one. He holds an LL.M. in Real Property Development from the University of Miami, giving him specialized expertise in complex transactions and development matters.
                        </p>
                        <p>
                            Whether representing a first-time homebuyer or a commercial developer, Josh is dedicated to being accessible and ensuring every client feels prioritized.
                        </p>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Education */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <GraduationCap className="h-6 w-6 text-primary" />
                            <h3 className="text-xl font-bold text-slate-900">Education</h3>
                        </div>
                        <ul className="space-y-4 text-slate-700">
                            <li>
                                <div className="font-semibold">University of Miami School of Law</div>
                                <div className="text-sm text-slate-500">LL.M. in Real Property Development, 2015</div>
                            </li>
                            <li>
                                <div className="font-semibold">Charleston School of Law</div>
                                <div className="text-sm text-slate-500">J.D., cum laude, 2012</div>
                            </li>
                            <li>
                                <div className="font-semibold">Dartmouth College</div>
                                <div className="text-sm text-slate-500">A.B., 2001</div>
                            </li>
                        </ul>
                    </section>

                    {/* Bar Admissions */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="h-6 w-6 text-primary" />
                            <h3 className="text-xl font-bold text-slate-900">Admissions</h3>
                        </div>
                        <ul className="space-y-2 text-slate-700">
                            <li>State of Georgia</li>
                            <li>State of Tennessee</li>
                            <li>State of South Carolina</li>
                            <li className="text-sm text-slate-500 mt-2 font-medium">Also licensed as a Real Estate Broker in GA, TN, and SC.</li>
                        </ul>
                    </section>

                    {/* Memberships */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Users className="h-6 w-6 text-primary" />
                            <h3 className="text-xl font-bold text-slate-900">Memberships</h3>
                        </div>
                        <ul className="space-y-2 text-slate-700 text-sm">
                            <li>American Bar Association, Real Property Trust & Estate Section</li>
                            <li>Tennessee Bar Association</li>
                            <li>Georgia Bar Association</li>
                            <li>South Carolina Bar Association</li>
                            <li>National Association of Realtors</li>
                            <li>Charleston County Bar Association</li>
                        </ul>
                    </section>

                    {/* Awards & Publications */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="h-6 w-6 text-primary" />
                            <h3 className="text-xl font-bold text-slate-900">Awards & Publications</h3>
                        </div>
                        <div className="space-y-4 text-slate-700 text-sm">
                            <div>
                                <span className="font-semibold">Real Property Fellow</span> (2016–2018)
                                <br />RPTE Section of American Bar Association
                            </div>
                            <div>
                                <span className="font-semibold">Vice Chair</span>
                                <br />Retail Leasing Committee, ABA
                            </div>
                            <div>
                                <span className="font-semibold">Publications:</span>
                                <br />"Dropping the Hammer", "Seller Beware!"
                            </div>
                        </div>
                    </section>

                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-6 text-slate-900">Work With Josh</h3>
                    <Button asChild size="lg">
                        <Link href="/contact">Schedule a Consultation</Link>
                    </Button>
                </div>

            </div>
        </div>
    );
}
