"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ConsultationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        state: "TN",
        matterType: "residential-closing",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Connect to backend or form service (Netlify/Formspree)
        console.log("Form submitted:", formData);
        alert("Thank you. We will contact you shortly.");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-sm border">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-1">
                        State
                    </label>
                    <select
                        id="state"
                        name="state"
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.state}
                        onChange={handleChange}
                    >
                        <option value="TN">Tennessee</option>
                        <option value="GA">Georgia</option>
                        <option value="SC">South Carolina</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="matterType" className="block text-sm font-medium text-slate-700 mb-1">
                        How can we help?
                    </label>
                    <select
                        id="matterType"
                        name="matterType"
                        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={formData.matterType}
                        onChange={handleChange}
                    >
                        <option value="residential-closing">Residential Closing</option>
                        <option value="commercial-closing">Commercial Closing</option>
                        <option value="litigation">Litigation / Dispute</option>
                        <option value="business-formation">Business Formation</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <div className="flex items-start gap-2">
                <input type="checkbox" required id="consent" className="mt-1" />
                <label htmlFor="consent" className="text-xs text-slate-500">
                    I understand that submitting this form does not create an attorney-client relationship.
                </label>
            </div>

            <Button type="submit" size="lg" className="w-full">
                Request Consultation
            </Button>
        </form>
    );
}
