import { faqData } from "@/lib/faq-data";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQPage() {
    return (
        <div className="bg-background min-h-screen pb-24">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Answers to common questions about real estate closings, litigation, and our firm.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 max-w-3xl">

                <div className="space-y-12">

                    {/* General */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">General Questions</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {faqData.general.map((faq, index) => (
                                <AccordionItem key={index} value={`item-gen-${index}`}>
                                    <AccordionTrigger className="text-left font-semibold text-slate-800">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                    {/* Litigation */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">Litigation & Disputes</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {faqData.litigation.map((faq, index) => (
                                <AccordionItem key={index} value={`item-lit-${index}`}>
                                    <AccordionTrigger className="text-left font-semibold text-slate-800">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                    {/* Closings */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">Residential Closings</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {faqData.closings.map((faq, index) => (
                                <AccordionItem key={index} value={`item-close-${index}`}>
                                    <AccordionTrigger className="text-left font-semibold text-slate-800">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                </div>

                <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
                    <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
                    <p className="text-muted-foreground mb-6">
                        We are happy to answer any specific questions you may have about your situation.
                    </p>
                    <Button asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>

            </div>
        </div>
    );
}
