"use client";

import {
    Brain,
    Zap,
    Globe,
    Target,
    Activity,
    Sparkles,
} from "lucide-react";
import Link from "next/link";

const stats = [
    { label: "AI Models Deployed", value: "47+", icon: Brain },
    { label: "Solutions Active", value: "12", icon: Zap },
    { label: "Countries Served", value: "8+", icon: Globe },
    { label: "Success Rate", value: "98.5%", icon: Target },
];

export default function AboutUsSection() {
    return (
        <header className="overflow-hidden bg-navy lg:bg-transparent lg:px-5">
            <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
                {/* Left side - Stats visual panel (like the book cover in Primer) */}
                <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
                    <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-brand text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
                        <div className="absolute inset-0 overflow-hidden rounded-br-6xl">
                            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 600" fill="none">
                                <defs>
                                    <pattern id="aboutGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3"/>
                                    </pattern>
                                </defs>
                                <rect width="300" height="600" fill="url(#aboutGrid)" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-navy-light shadow-xl md:w-80 lg:w-auto">
                        <div className="w-full rounded-xl border border-brand/20 bg-gradient-to-br from-navy-light to-navy-lighter p-8 lg:p-10">
                            {/* Stats dashboard visual */}
                            <div className="mb-6 flex items-center gap-3">
                                <Activity className="h-5 w-5 text-brand" />
                                <span className="text-sm font-bold uppercase tracking-widest text-brand">Synthi AI Core</span>
                            </div>
                            <div className="space-y-5">
                                {stats.map((stat) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div key={stat.label} className="flex items-center justify-between rounded-lg border border-brand/10 bg-navy-lighter/50 px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/20">
                                                    <Icon className="h-4 w-4 text-brand" />
                                                </div>
                                                <span className="text-sm text-slate-300">{stat.label}</span>
                                            </div>
                                            <span className="text-lg font-bold text-white">{stat.value}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
                                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                                <span>All systems operational</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side - Hero content */}
                <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
                    <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-navy" />
                    <Sparkles className="relative h-12 w-12 text-brand" />
                    <div className="relative">
                        <h1 className="mt-8 font-display text-5xl/tight font-extrabold text-white sm:text-6xl/tight">
                            Artificial Intelligence for a{' '}
                            <span className="text-brand">Sustainable Future</span>
                        </h1>
                        <p className="mt-4 text-3xl/9 text-slate-400">
                            Empowering Africa through ethical, high-performance AI solutions.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-slate-400">
                            At Synthi AI, we develop advanced solutions in artificial intelligence,
                            robotics, and computer vision to accelerate innovation and address the
                            strategic challenges of businesses and institutions.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-base font-semibold text-white hover:bg-brand-dark transition-colors duration-200"
                            >
                                Get in touch
                            </Link>
                            <Link
                                href="#core-values"
                                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-brand ring-1 ring-brand/30 hover:ring-brand/60 transition-all duration-200"
                            >
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
