import {
    BarChart3,
    Cloud,
    Globe,
    Users,
    Zap,
} from "lucide-react";
import { JSX } from "react";

type ValueCard = {
    icon: JSX.Element;
    title: string;
    description: string;
};

const valueCards: ValueCard[] = [
    {
        icon: <Zap className="h-8 w-8" />,
        title: "Innovation",
        description: "Designing cutting-edge solutions adapted to the market realities with quantum-enhanced algorithms.",
    },
    {
        icon: <BarChart3 className="h-8 w-8" />,
        title: "Excellence",
        description: "Maintaining high technological standards and ensuring reliable solutions through continuous optimization.",
    },
    {
        icon: <Users className="h-8 w-8" />,
        title: "Ethics & Transparency",
        description: "Ensuring responsible, secure, and user-respectful AI with blockchain-verified processes.",
    },
    {
        icon: <Globe className="h-8 w-8" />,
        title: "Society Impact",
        description: "Improving people's lives and contributing to the Sustainable Development Goals through AI solutions.",
    },
    {
        icon: <Cloud className="h-8 w-8" />,
        title: "Collaboration",
        description: "Working with key players to build a strong AI ecosystem in Africa through distributed computing.",
    },
];

const gradients = [
    "from-brand to-brand-light",
    "from-brand-light to-brand-lighter",
    "from-brand-lighter to-brand",
    "from-brand to-brand-lightest",
    "from-brand-light to-brand",
];

export default function FeaturesOverviewSection() {
    return (
        <section
            id="core-values"
            aria-labelledby="core-values-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                {/* Section badge */}
                <p className="inline-flex items-center rounded-full px-4 py-1 text-brand ring-1 ring-inset ring-brand/30">
                    <span className="font-mono text-sm" aria-hidden="true">02</span>
                    <span className="ml-3 h-3.5 w-px bg-brand/20"></span>
                    <span className="ml-3 text-base font-medium tracking-tight">Our Values</span>
                </p>
                <h2
                    id="core-values-title"
                    className="mt-8 font-display text-4xl font-bold tracking-tight text-white"
                >
                    Our Core Values
                </h2>
                <p className="mt-4 text-lg tracking-tight text-slate-400">
                    We work closely with our clients to understand their unique challenges
                    and deliver tailored solutions that drive tangible results.
                </p>
            </div>

            {/* Value cards grid - matching Primer's screencasts grid */}
            <div className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
                <ol className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:value] sm:grid-cols-2 lg:grid-cols-3" role="list">
                    {valueCards.map((card, index) => (
                        <li key={card.title} className="[counter-increment:value]">
                            {/* Card visual header */}
                            <div className={`relative flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[index]} px-6 shadow-lg`}>
                                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-sm">
                                    {card.icon}
                                </div>
                            </div>
                            {/* Card content */}
                            <h3 className="mt-8 text-base font-medium tracking-tight text-white before:mb-2 before:block before:font-mono before:text-sm before:text-brand before:content-[counter(value,decimal-leading-zero)]">
                                {card.title}
                            </h3>
                            <p className="mt-2 text-sm text-slate-400">
                                {card.description}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
