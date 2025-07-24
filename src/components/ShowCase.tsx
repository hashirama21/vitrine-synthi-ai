"use client";

import {
    Brain,
    Cpu,
    Sprout,
    Building2,
    ShoppingCart,
    Home,
    ArrowRight,
    ExternalLink,
    Sparkles,
    Target,
    Users,
    TrendingUp,
    Zap,
    Globe,
    Shield
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { JSX } from "react/jsx-runtime";
import Image from "next/image";

type FloatingElement = {
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    type: 'neural' | 'particle';
};

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'outline';
    onClick?: () => void;
}

export default function SolutionsShowcaseSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [activeSolution, setActiveSolution] = useState<number | null>(null);
    const [neuralAnimation, setNeuralAnimation] = useState(0);
    const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);

    // Synthi AI's flagship solutions
    const solutions = [
        {
            id: 1,
            name: "Ubora AI",
            tagline: "Intelligent Document Processing Platform",
            description: "Revolutionary AI-powered platform for automated document analysis, data extraction, and intelligent processing. Transform your paperwork into actionable insights with advanced OCR and NLP capabilities.",
            icon: <Brain className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop&auto=format",
            features: ["Smart OCR", "Data Extraction", "Document Classification", "Workflow Automation"],
            technologies: ["Computer Vision", "NLP", "Machine Learning", "Cloud Computing"],
            color: "from-[#6b7db8] to-[#8a9fd9]",
            bgPattern: "documents",
            stats: { accuracy: "99.2%", processing: "10K+", time_saved: "80%" },
            category: "AI Platform",
            link: "/solutions/ubora-ai"
        },
        {
            id: 2,
            name: "Farm2Market",
            tagline: "Agricultural Supply Chain Revolution",
            description: "End-to-end digital platform connecting farmers directly to markets, optimizing supply chains, and ensuring fair pricing through AI-driven market analysis and logistics optimization.",
            icon: <Sprout className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop&auto=format",
            features: ["Market Connect", "Price Analytics", "Logistics Optimization", "Quality Assurance"],
            technologies: ["IoT", "Blockchain", "Predictive Analytics", "Mobile Apps"],
            color: "from-[#8a9fd9] to-[#b3c0de]",
            bgPattern: "agriculture",
            stats: { farmers: "5K+", markets: "200+", revenue_boost: "35%" },
            category: "AgriTech",
            link: "/solutions/farm2market"
        },
        {
            id: 3,
            name: "Kamer Heaven",
            tagline: "Smart Real Estate & Property Management",
            description: "Intelligent property management platform leveraging AI for property valuation, tenant screening, maintenance prediction, and automated property management workflows.",
            icon: <Home className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop&auto=format",
            features: ["Property Valuation", "Tenant Screening", "Maintenance Prediction", "Digital Contracts"],
            technologies: ["AI Analytics", "Computer Vision", "Blockchain", "IoT Sensors"],
            color: "from-[#b3c0de] to-[#6b7db8]",
            bgPattern: "realestate",
            stats: { properties: "10K+", satisfaction: "95%", efficiency: "60%" },
            category: "PropTech",
            link: "/solutions/kamer-heaven"
        },
        {
            id: 4,
            name: "Smart Cities",
            tagline: "Urban Intelligence & Automation",
            description: "Comprehensive smart city solutions integrating IoT sensors, AI analytics, and automated systems to optimize traffic, energy consumption, waste management, and public services.",
            icon: <Building2 className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=500&h=300&fit=crop&auto=format",
            features: ["Traffic Optimization", "Energy Management", "Waste Analytics", "Public Safety"],
            technologies: ["IoT Networks", "Edge Computing", "Big Data", "5G Integration"],
            color: "from-[#6b7db8] to-[#ebf1ff]",
            bgPattern: "smartcity",
            stats: { cities: "15+", energy_saved: "40%", traffic_flow: "50%" },
            category: "Smart Infrastructure",
            link: "/solutions/smart-cities"
        },
        {
            id: 5,
            name: "Smart Farming",
            tagline: "Precision Agriculture & Crop Intelligence",
            description: "Advanced precision agriculture platform using drones, IoT sensors, and AI to optimize crop yields, monitor soil health, predict weather impacts, and automate irrigation systems.",
            icon: <Sprout className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=500&h=300&fit=crop&auto=format",
            features: ["Crop Monitoring", "Soil Analysis", "Weather Prediction", "Automated Irrigation"],
            technologies: ["Drone Technology", "Satellite Imagery", "AI Prediction", "IoT Sensors"],
            color: "from-[#8a9fd9] to-[#6b7db8]",
            bgPattern: "farming",
            stats: { yield_increase: "45%", water_saved: "30%", farms: "500+" },
            category: "AgriTech",
            link: "/solutions/smart-farming"
        }
    ];

    // Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1, rootMargin: "-100px" }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Animation of floating elements
    useEffect(() => {
        const generateFloatingElements = (): void => {
            const elements: FloatingElement[] = [];
            for (let i = 0; i < 15; i++) {
                elements.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 5 + 2,
                    speed: Math.random() * 1.2 + 0.3,
                    opacity: Math.random() * 0.3 + 0.1,
                    type: Math.random() > 0.8 ? 'neural' : 'particle'
                });
            }
            setFloatingElements(elements);
        };

        generateFloatingElements();

        const animateElements = (): void => {
            const time = Date.now() * 0.001;
            setNeuralAnimation(time);

            setFloatingElements(prev =>
                prev.map(el => ({
                    ...el,
                    y: (el.y + el.speed * 0.06) % 100,
                    x: el.x + Math.sin(time + el.id) * 0.03,
                    opacity: el.type === 'neural'
                        ? 0.1 + Math.sin(time * 1.5 + el.id) * 0.2 + 0.2
                        : el.opacity
                }))
            );
        };

        const interval = setInterval(animateElements, 80);
        return () => clearInterval(interval);
    }, []);

    type CardProps = {
        children: React.ReactNode;
        className?: string;
        style?: React.CSSProperties;
        onMouseEnter?: () => void;
        onMouseLeave?: () => void;
    };

    const Card: React.FC<CardProps> = ({
        children,
        className,
        style,
        onMouseEnter,
        onMouseLeave,
    }) => (
        <div
            className={className}
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </div>
    );

    const CardContent: React.FC<CardContentProps> = ({ children, className = "" }) => (
        <div className={className}>
            {children}
        </div>
    );

    const Badge: React.FC<BadgeProps> = ({ children, className = "" }) => (
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${className}`}>
            {children}
        </span>
    );

    const Button: React.FC<ButtonProps> = ({ children, className = "", variant = "default", ...props }) => {
        const baseClasses = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
        const variantClasses = variant === "outline"
            ? "border-2 border-[#6b7db8]/30 text-[#6b7db8] hover:bg-[#6b7db8]/10 hover:border-[#6b7db8]/50 backdrop-blur-sm"
            : "bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] hover:from-[#5a6ba3] hover:to-[#7a8fc9] text-white shadow-lg hover:shadow-xl hover:shadow-[#6b7db8]/30";

        return (
            <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
                {children}
            </button>
        );
    };

    // Solution-specific background patterns
    const renderBackgroundPattern = (pattern: string): JSX.Element | null => {
        switch (pattern) {
            case 'documents':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="documents" x="0" y="0" width="20" height="25" patternUnits="userSpaceOnUse">
                                <rect x="6" y="5" width="8" height="12" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
                                <path d="M7,7 L13,7 M7,9 L13,9 M7,11 L11,11" stroke="currentColor" strokeWidth="0.3" opacity="0.6" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#documents)" />
                    </svg>
                );
            case 'agriculture':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="agriculture" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                                <path d="M7.5,2 Q6,5 7.5,8 Q9,5 7.5,2" fill="currentColor" opacity="0.3" />
                                <circle cx="7.5" cy="12" r="1" fill="currentColor" opacity="0.5" />
                                <path d="M7.5,8 L7.5,12" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#agriculture)" />
                    </svg>
                );
            case 'realestate':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="realestate" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M10,5 L15,10 L15,16 L5,16 L5,10 Z" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
                                <rect x="7" y="12" width="2" height="4" fill="currentColor" opacity="0.3" />
                                <rect x="11" y="10" width="2" height="2" fill="currentColor" opacity="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#realestate)" />
                    </svg>
                );
            case 'smartcity':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="smartcity" x="0" y="0" width="25" height="20" patternUnits="userSpaceOnUse">
                                <rect x="3" y="8" width="4" height="8" fill="currentColor" opacity="0.3" />
                                <rect x="9" y="5" width="4" height="11" fill="currentColor" opacity="0.4" />
                                <rect x="15" y="10" width="4" height="6" fill="currentColor" opacity="0.3" />
                                <circle cx="5" cy="6" r="0.5" fill="currentColor" opacity="0.6" />
                                <circle cx="11" cy="3" r="0.5" fill="currentColor" opacity="0.6" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#smartcity)" />
                    </svg>
                );
            case 'farming':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="farming" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                                <circle cx="9" cy="14" r="2" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
                                <path d="M9,6 Q7,8 9,10 Q11,8 9,6" fill="currentColor" opacity="0.4" />
                                <path d="M9,10 L9,12" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                                <path d="M6,4 Q9,2 12,4" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#farming)" />
                    </svg>
                );
            default:
                return null;
        }
    };

    const handleSolutionClick = (link: string): void => {
        // In a real application, you would use Next.js router or React Router
        console.log(`Navigating to: ${link}`);
        // Example: router.push(link);
    };

    return (
        <section ref={sectionRef} className="relative py-20 lg:py-32 bg-black overflow-hidden">
            {/* Background with floating elements */}
            <div className="absolute inset-0">
                {floatingElements.map(el => (
                    <div
                        key={el.id}
                        className={`absolute rounded-full transition-all duration-100 ${el.type === 'neural'
                            ? 'bg-[#6b7db8]/30 animate-pulse'
                            : 'bg-[#6b7db8]/15'
                            }`}
                        style={{
                            left: `${el.x}%`,
                            top: `${el.y}%`,
                            width: `${el.size}px`,
                            height: `${el.size}px`,
                            opacity: el.opacity,
                            filter: el.type === 'neural' ? 'blur(1px)' : 'blur(0.5px)',
                            transform: el.type === 'neural'
                                ? `scale(${1 + Math.sin(neuralAnimation + el.id) * 0.2})`
                                : 'none'
                        }}
                    />
                ))}
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-32 right-24 w-2 h-2 bg-[#6b7db8] rounded-full animate-pulse"></div>
                <div className="absolute bottom-40 left-16 w-1.5 h-1.5 bg-[#6b7db8]/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-2/3 left-8 w-1 h-1 bg-[#6b7db8]/40 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#8a9fd9]/50 rounded-full animate-pulse" style={{ animationDelay: '2.2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Header Section */}
                <div className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <div className="inline-block mb-6">
                        <Badge className="px-6 py-3 bg-[#6b7db8]/10 border border-[#6b7db8]/20 text-[#6b7db8] uppercase text-sm font-semibold tracking-widest rounded-full backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                            Revolutionary AI Solutions
                        </Badge>
                    </div>

                    <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
                        <span className="bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent">
                            Our Flagship
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] bg-clip-text text-transparent">
                            Solutions
                        </span>
                    </h2>

                    <p className="text-lg lg:text-xl text-[#6b6b6b] leading-relaxed max-w-3xl mx-auto">
                        Discover our portfolio of cutting-edge AI solutions that are transforming industries
                        across Africa and driving digital innovation at scale.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 mb-16">
                    {solutions.map((solution, index) => (
                        <Card
                            key={solution.id}
                            className={`group relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 border border-[#6b7db8]/20 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-[#6b7db8]/25 transition-all duration-700 hover:-translate-y-4 hover:scale-105 overflow-hidden cursor-pointer ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                }`}
                            style={{ transitionDelay: `${index * 0.15}s` }}
                            onMouseEnter={() => setActiveSolution(solution.id)}
                            onMouseLeave={() => setActiveSolution(null)}
                        >
                            <CardContent className="relative p-0 h-full">

                                {/* Solution Image */}
                                <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
                                    <Image
                                        src={solution.image}
                                        alt={solution.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <Badge className="px-3 py-1 bg-black/50 text-white border border-white/20 text-xs backdrop-blur-sm">
                                            {solution.category}
                                        </Badge>
                                    </div>

                                    {/* Icon overlay */}
                                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${solution.color} p-3 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <div className="text-white w-full h-full flex items-center justify-center">
                                            {solution.icon}
                                        </div>
                                    </div>

                                    {/* Solution name overlay */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {solution.name}
                                        </h3>
                                        <p className="text-sm text-gray-200 opacity-90">
                                            {solution.tagline}
                                        </p>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6 lg:p-8 relative">
                                    {/* Background Pattern */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-5 group-hover:opacity-12 transition-opacity duration-500`}>
                                        {renderBackgroundPattern(solution.bgPattern)}
                                    </div>

                                    {/* Description */}
                                    <p className="text-[#6b6b6b] text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300 relative z-10 line-clamp-3">
                                        {solution.description}
                                    </p>

                                    {/* Key Features */}
                                    <div className="mb-6 relative z-10">
                                        <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <Target className="w-3 h-3 text-[#6b7db8]" />
                                            Key Features
                                        </h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {solution.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center gap-2 text-xs text-[#6b6b6b]">
                                                    <div className="w-1 h-1 bg-[#6b7db8] rounded-full"></div>
                                                    <span className="group-hover:text-gray-300 transition-colors duration-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div className="mb-6 relative z-10">
                                        <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <Cpu className="w-3 h-3 text-[#6b7db8]" />
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {solution.technologies.map((tech, techIndex) => (
                                                <Badge
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-[#6b7db8]/20 text-[#6b7db8] border border-[#6b7db8]/30 text-xs rounded-lg hover:bg-[#6b7db8]/30 hover:scale-105 transition-all duration-200"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div className="relative z-10">
                                        <Button
                                            className="w-full group/btn"
                                            onClick={() => handleSolutionClick(solution.link)}
                                        >
                                            <span>Explore Solution</span>
                                            <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:scale-110 transition-transform duration-300" />
                                        </Button>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-8 transition-opacity duration-500 rounded-b-3xl`}></div>

                                    {/* Active Solution Indicator */}
                                    {activeSolution === solution.id && (
                                        <div className="absolute -inset-1 bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] rounded-3xl opacity-30 animate-pulse blur-sm"></div>
                                    )}

                                    {/* Scan line effect */}
                                    <div className="absolute inset-0 overflow-hidden rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#6b7db8] to-transparent animate-pulse"></div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>

            <style jsx>{`
               .line-clamp-3 {
                   display: -webkit-box;
                   -webkit-line-clamp: 3;
                   -webkit-box-orient: vertical;
                   overflow: hidden;
               }
           `}</style>
        </section>
    );
}