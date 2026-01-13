import { MessageSquare, FileSearch, CheckCircle2 } from "lucide-react";

const steps = [
    {
        title: "1. Contact Us",
        description: "Fill out our form or call to schedule an initial consultation.",
        icon: MessageSquare,
    },
    {
        title: "2. Strategic Review",
        description: "We analyze your situation and propose a clear legal strategy.",
        icon: FileSearch,
    },
    {
        title: "3. Resolution",
        description: "We execute the plan efficiently to close your deal or resolve your dispute.",
        icon: CheckCircle2,
    },
];

export function Process() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">How We Work</h2>
                    <p className="text-muted-foreground">
                        A straightforward process designed to give you clarity and results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-border -z-10" />

                    {steps.map((step, index) => (
                        <div key={step.title} className="flex flex-col items-center text-center">
                            <div className="h-24 w-24 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6">
                                <step.icon className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
