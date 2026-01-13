import { ConsultationForm } from "@/components/shared/ConsultationForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata = {
    title: "Contact Crowfoot Law | Schedule a Consultation",
    description: "Get in touch with Crowfoot Law Firm for real estate legal services in TN, GA, and SC.",
};

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero */}
            <section className="bg-slate-900 text-white py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Get In Touch</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Ready to discuss your real estate matter? Schedule a consultation today.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 text-slate-900">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Office Address</h3>
                                        <p className="text-slate-600">
                                            651 E 4th Street Suite 200<br />
                                            Chattanooga, TN 37403
                                        </p>
                                        <a
                                            href="https://maps.google.com/?q=651+E+4th+Street+Suite+200+Chattanooga+TN+37403"
                                            target="_blank"
                                            className="text-primary text-sm hover:underline mt-1 inline-block"
                                        >
                                            Get Directions &rarr;
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Phone</h3>
                                        <p className="text-slate-600">
                                            <a href="tel:4044337435" className="hover:text-primary transition-colors">
                                                (404) 433-7435
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Email</h3>
                                        <p className="text-slate-600">
                                            <a href="mailto:josh@crowfootlaw.com" className="hover:text-primary transition-colors">
                                                josh@crowfootlaw.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Clock className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Hours</h3>
                                        <p className="text-slate-600">
                                            Monday - Friday: 9:00 AM - 5:00 PM<br />
                                            Weekend appointments by request.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Map */}
                        <div className="w-full h-96 bg-slate-100 rounded-xl border overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7748.700817388589!2d-85.302122!3d35.051933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88605e6f47cf405b%3A0x7462868946bf18e0!2s651%20E%204th%20St%20%23200%2C%20Chattanooga%2C%20TN%2037403!5e1!3m2!1sen!2sus!4v1768251061053!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-slate-900">Send Us a Message</h2>
                        <ConsultationForm />
                    </div>

                </div>
            </div>
        </div>
    );
}
