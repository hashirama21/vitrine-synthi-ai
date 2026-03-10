import {
    CheckCircle2,
    Shield,
    Network,
    Target,
    Globe,
    Brain,
    Send,
    ArrowRight,
    Database,
    Cpu,
    Zap,
    Star,
} from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

type BulletPoint = {
    text: string;
    icon: JSX.Element;
    metric: string;
};

const BULLET_POINTS: BulletPoint[] = [
    {
        text: "The AI leader in Africa: Unique expertise in AI applied to the continent's needs.",
        icon: <Globe className="h-5 w-5" />,
        metric: "15 Countries",
    },
    {
        text: "An ethical and responsible approach: Secure and accessible AI solutions.",
        icon: <Shield className="h-5 w-5" />,
        metric: "99.9% Security",
    },
    {
        text: "A strong network of partners: Collaboration with businesses, startups, universities, and institutions.",
        icon: <Network className="h-5 w-5" />,
        metric: "500+ Partners",
    },
    {
        text: "Concrete impact: Transformation of key sectors and improvement of people's lives.",
        icon: <Target className="h-5 w-5" />,
        metric: "1M+ Lives",
    },
    {
        text: "Cutting-edge technology: Integration of the latest advances in AI, NLP, and computer vision.",
        icon: <Brain className="h-5 w-5" />,
        metric: "98.7% Accuracy",
    },
];

const resources = [
    {
        title: "AI Research Lab",
        description: "Pioneering research in machine learning, NLP, and computer vision for real-world African challenges.",
        gradient: "bg-gradient-to-br from-brand-dark via-brand to-brand-light",
        icon: Brain,
    },
    {
        title: "Synthi AI Academy",
        description: "Comprehensive training programs to build the next generation of African AI talent and innovators.",
        gradient: "bg-gradient-to-br from-brand-light via-brand to-brand-dark",
        icon: Database,
    },
    {
        title: "Enterprise Solutions",
        description: "Scalable, secure AI implementations tailored to transform your business operations and strategy.",
        gradient: "bg-gradient-to-br from-brand via-brand-lighter to-brand-light",
        icon: Cpu,
    },
];

const stats = [
    { label: "Projects Delivered", value: "500+", icon: Database },
    { label: "Success Rate", value: "98.7%", icon: Target },
    { label: "Countries Served", value: "15+", icon: Globe },
    { label: "AI Models", value: "47+", icon: Cpu },
];

export default function ProfessionalSectionsComplete() {
    return (
        <>
            {/* Why Choose Us - Section "03" (like Primer's Resources) */}
            <section
                id="why-choose-us"
                aria-labelledby="why-choose-us-title"
                className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
            >
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    {/* Section badge */}
                    <p className="inline-flex items-center rounded-full px-4 py-1 text-brand ring-1 ring-inset ring-brand/30">
                        <span className="font-mono text-sm" aria-hidden="true">03</span>
                        <span className="ml-3 h-3.5 w-px bg-brand/20"></span>
                        <span className="ml-3 text-base font-medium tracking-tight">Why Choose Us</span>
                    </p>
                    <h2
                        id="why-choose-us-title"
                        className="mt-8 font-display text-4xl font-bold tracking-tight text-white"
                    >
                        Commitment to Excellence
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-400">
                        Synthi AI brings unique expertise, ethical AI practices, and a strong
                        partner network to help you achieve transformative results.
                    </p>
                </div>

                {/* Resources-style cards */}
                <div className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
                    <ol className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-slate-700/30" role="list">
                        {resources.map((resource) => {
                            const Icon = resource.icon;
                            return (
                                <li key={resource.title} className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
                                    <div className={`relative h-48 overflow-hidden rounded-2xl shadow-lg ${resource.gradient}`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Icon className="h-16 w-16 text-white/30" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-medium tracking-tight text-white">
                                            {resource.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-slate-400">
                                            {resource.description}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>

                {/* Checklist of differentiators */}
                <div className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
                    <ul className="mt-8 space-y-3">
                        {BULLET_POINTS.map((point) => (
                            <li key={point.metric} className="flex items-start">
                                <CheckCircle2 className="h-8 w-8 flex-none fill-brand/20 stroke-brand" />
                                <span className="ml-4 text-base text-slate-300">
                                    <strong className="font-semibold text-brand">{point.metric}</strong> — {point.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Testimonial break */}
            <aside className="relative bg-navy-light py-16 sm:py-32">
                <div className="absolute inset-0 text-slate-400/10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 300" fill="none">
                        <defs>
                            <pattern id="ctaTestGrid" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                                <circle cx="12.5" cy="12.5" r="1" fill="currentColor" opacity="0.4" />
                            </pattern>
                        </defs>
                        <rect width="600" height="300" fill="url(#ctaTestGrid)" />
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
                                &ldquo;Synthi AI has transformed the way we approach data analysis.
                                Their solutions are not just technologically advanced, but truly
                                adapted to the African context with unmatched reliability.&rdquo;
                            </p>
                        </blockquote>
                        <figcaption className="mt-10 flex items-center justify-center">
                            <div className="overflow-hidden rounded-full bg-navy-lighter">
                                <div className="flex h-12 w-12 items-center justify-center bg-brand/20 text-brand">
                                    <span className="text-lg font-bold">P</span>
                                </div>
                            </div>
                            <div className="ml-4">
                                <div className="text-base/6 font-medium text-white">Partner Enterprise</div>
                                <div className="mt-1 text-sm text-slate-400">Technology Director</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </aside>

            {/* CTA Section (like Primer's free chapters with brand background) */}
            <section id="contact-cta" className="relative overflow-hidden bg-brand py-16 sm:py-32">
                <div className="absolute inset-0 text-white/10">
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 400" fill="none">
                        <defs>
                            <pattern id="ctaPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <rect x="12" y="12" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3"/>
                                <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.2"/>
                            </pattern>
                        </defs>
                        <rect width="800" height="400" fill="url(#ctaPattern)" />
                    </svg>
                </div>
                <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
                    <div className="max-w-2xl">
                        <h2 className="font-display text-5xl font-extrabold text-white">
                            Empower Your Future with Synthi AI
                        </h2>
                        <p className="mt-4 text-lg text-brand-lightest/80">
                            Ready to harness the power of AI for your business or institution?
                            Contact us today to explore how Synthi AI can tailor cutting-edge
                            solutions to your specific needs.
                        </p>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:pl-16">
                        <a
                            href="mailto:contact@synthi-ai.com"
                            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand hover:text-brand-dark transition-colors duration-200 shadow-lg"
                        >
                            <Send className="h-5 w-5" />
                            Contact Us
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* Stats row */}
                <div className="relative mx-auto mt-16 max-w-5xl border-t border-white/20 px-4 pt-10 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                        {stats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div key={stat.label} className="text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <Icon className="h-4 w-4 text-white/70" />
                                        <span className="text-3xl font-bold text-white">{stat.value}</span>
                                    </div>
                                    <div className="mt-1 text-sm text-brand-lightest/70 uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
