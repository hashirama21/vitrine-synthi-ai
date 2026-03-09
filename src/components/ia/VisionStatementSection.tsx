import {
    CheckCircle2,
    Network,
    Shield,
    Database,
    Binary,
    Star,
} from "lucide-react";

const features = [
    { icon: Network, text: "Advanced AI models tailored for African markets and global needs" },
    { icon: Shield, text: "Ethical, secure, and transparent AI systems you can trust" },
    { icon: Database, text: "Big data analytics driving real-world insights and decisions" },
    { icon: Binary, text: "Machine learning that adapts and improves continuously" },
];

export default function VisionStatementSection() {
    return (
        <>
            {/* Introduction Section - "01" */}
            <section
                id="introduction"
                aria-label="Introduction"
                className="scroll-mt-14 pb-8 pt-16 sm:scroll-mt-32 sm:pb-10 sm:pt-20 lg:pb-16 lg:pt-32"
            >
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    {/* Section badge */}
                    <p className="inline-flex items-center rounded-full px-4 py-1 text-brand ring-1 ring-inset ring-brand/30">
                        <span className="font-mono text-sm" aria-hidden="true">01</span>
                        <span className="ml-3 h-3.5 w-px bg-brand/20"></span>
                        <span className="ml-3 text-base font-medium tracking-tight">About Us</span>
                    </p>
                    <p className="mt-8 font-display text-4xl font-bold tracking-tight text-white">
                        Making Africa a global leader in artificial intelligence.
                    </p>
                    <p className="mt-4 text-lg tracking-tight text-slate-400">
                        Our ambition is clear: to make Africa a global leader in AI by creating
                        ethical, high-performance, and accessible technologies capable of transforming
                        key sectors such as health, agriculture, finance and climate.
                    </p>
                    <p className="mt-4 text-lg tracking-tight text-slate-400">
                        We believe that AI is not just a technology, but a powerful lever for development
                        and economic transformation. That&apos;s why we collaborate with researchers, startups,
                        businesses, and governments to build a strong technological ecosystem.
                    </p>

                    {/* Feature checklist */}
                    <ul className="mt-8 space-y-3">
                        {features.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <li key={feature.text} className="flex">
                                    <CheckCircle2 className="h-8 w-8 flex-none fill-brand/20 stroke-brand" />
                                    <span className="ml-4 text-base text-slate-300">{feature.text}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {/* Vision Testimonial Section */}
            <aside className="relative bg-navy-light py-16 sm:py-32">
                {/* Pattern background */}
                <div className="absolute inset-0 text-slate-400/10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 300" fill="none">
                        <defs>
                            <pattern id="visionGrid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                                <path d="M 30 0 L 0 0 0 30" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                            </pattern>
                        </defs>
                        <rect width="600" height="300" fill="url(#visionGrid)" />
                    </svg>
                </div>
                <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <figure>
                        <div className="flex justify-center text-brand">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                        </div>
                        <blockquote className="mt-10 text-center font-display text-4xl font-medium tracking-tight text-white">
                            <p>
                                &ldquo;We aim to position Africa as a key player in the artificial
                                intelligence revolution by developing local solutions with a global
                                impact. Our goal is to be the AI leader on the continent, offering
                                innovations that improve people&apos;s lives and strengthen the
                                competitiveness of businesses.&rdquo;
                            </p>
                        </blockquote>
                        <figcaption className="mt-10 flex items-center justify-center">
                            <div className="overflow-hidden rounded-full bg-navy-lighter">
                                <div className="flex h-12 w-12 items-center justify-center bg-brand/20 text-brand">
                                    <span className="text-lg font-bold">S</span>
                                </div>
                            </div>
                            <div className="ml-4">
                                <div className="text-base/6 font-medium text-white">Synthi AI</div>
                                <div className="mt-1 text-sm text-slate-400">Our Vision for the Future</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </aside>
        </>
    );
}
