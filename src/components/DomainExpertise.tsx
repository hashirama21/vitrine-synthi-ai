"use client";

import {
    Brain,
    Eye,
    Bot,
    MessageSquare,
    Code2,
    Cpu,
    Sparkles,
    ArrowRight,
    Users,
    Target,
    BarChart3
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { JSX } from "react/jsx-runtime";
import { CardContent } from "./ui/card";

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

export default function ExpertiseDomainsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [neuralAnimation, setNeuralAnimation] = useState(0);
    const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);

    // Synthi AI's specialized AI expertise domains with real images
    const expertiseDomains = [
        {
            id: 1,
            title: "Artificial Intelligence",
            subtitle: "Machine Learning & Deep Learning",
            description: "Development of cutting-edge AI algorithms using deep neural networks, reinforcement learning, and advanced optimization techniques to create intelligent adaptive systems that learn and evolve.",
            icon: <Brain className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&auto=format",
            technologies: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "CUDA", "OpenAI"],
            applications: ["Predictive models", "Neural networks", "Machine learning", "Generative AI", "Optimization"],
            color: "from-[#6b7db8] to-[#8a9fd9]",
            bgPattern: "neural",
            stats: { models: "47+", accuracy: "98.5%", datasets: "500TB" },
            specialties: ["Deep Learning", "Neural Networks", "AutoML", "Transfer Learning"]
        },
        {
            id: 2,
            title: "Computer Vision",
            subtitle: "Advanced Image Analysis & Recognition",
            description: "Advanced computer vision solutions for object detection, facial recognition, medical analysis, and intelligent surveillance using the latest CNN and transformer algorithms.",
            icon: <Eye className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&auto=format",
            technologies: ["OpenCV", "YOLO", "MediaPipe", "Detectron2", "TensorRT", "ONNX"],
            applications: ["Object detection", "Facial recognition", "Intelligent OCR", "Medical imaging", "Smart surveillance"],
            color: "from-[#6b7db8] to-[#b3c0de]",
            bgPattern: "vision",
            stats: { fps: "120+", precision: "99.2%", objects: "1000+" },
            specialties: ["Object Detection", "Image Segmentation", "Face Recognition", "Medical Imaging"]
        },
        {
            id: 3,
            title: "Intelligent Robotics",
            subtitle: "Autonomous Robotic Systems",
            description: "Design and development of intelligent robots integrating AI, autonomous navigation, object manipulation, and human-machine interaction for Industry 4.0 and services.",
            icon: <Bot className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&auto=format",
            technologies: ["ROS2", "Gazebo", "MoveIt", "Navigation2", "Arduino", "Raspberry Pi"],
            applications: ["Industrial robots", "Autonomous navigation", "Object manipulation", "Intelligent drones", "Collaborative robots"],
            color: "from-[#8a9fd9] to-[#6b7db8]",
            bgPattern: "robotics",
            stats: { robots: "35+", autonomy: "95%", industries: "15" },
            specialties: ["Autonomous Navigation", "Robotic Manipulation", "SLAM", "Path Planning"]
        },
        {
            id: 4,
            title: "NLP & Language AI",
            subtitle: "Natural Language Processing",
            description: "Natural language processing solutions for understanding, generation, and text analysis. Intelligent chatbots, automatic translation, and sentiment analysis powered by transformer models.",
            icon: <MessageSquare className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop&auto=format",
            technologies: ["Transformers", "BERT", "GPT", "spaCy", "Hugging Face", "LangChain"],
            applications: ["AI chatbots", "Sentiment analysis", "Auto translation", "Text generation", "Entity extraction"],
            color: "from-[#b3c0de] to-[#6b7db8]",
            bgPattern: "nlp",
            stats: { languages: "25+", accuracy: "96.8%", queries: "1M+" },
            specialties: ["Conversational AI", "Text Generation", "Sentiment Analysis", "Named Entity Recognition"]
        },
        {
            id: 5,
            title: "AI Software Engineering",
            subtitle: "Architecture & AI Development",
            description: "Development of intelligent applications with microservices architecture, MLOps, edge computing deployment, and AI API integration in complex systems.",
            icon: <Code2 className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&auto=format",
            technologies: ["Python", "FastAPI", "Docker", "Kubernetes", "MLflow", "Apache Kafka"],
            applications: ["MLOps pipelines", "AI APIs", "Edge computing", "Microservices", "AI monitoring"],
            color: "from-[#6b7db8] to-[#ebf1ff]",
            bgPattern: "software",
            stats: { apis: "200+", uptime: "99.9%", deployments: "5000+" },
            specialties: ["MLOps", "AI APIs", "Edge Deployment", "Model Serving"]
        },
        {
            id: 6,
            title: "Data Science & Analytics",
            subtitle: "Intelligent Data Science",
            description: "Advanced analysis of massive datasets, discovery of hidden patterns, business predictions, and intelligent dashboards to transform your data into strategic insights.",
            icon: <BarChart3 className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
            technologies: ["Pandas", "NumPy", "Apache Spark", "Databricks", "Power BI", "Plotly"],
            applications: ["Business predictions", "Data mining", "AI visualization", "Real-time analytics", "Intelligent KPIs"],
            color: "from-[#8a9fd9] to-[#b3c0de]",
            bgPattern: "analytics",
            stats: { insights: "10K+", models: "150+", ROI: "340%" },
            specialties: ["Predictive Analytics", "Real-time Processing", "Business Intelligence", "Data Mining"]
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

    // Animation of floating elements and neural networks
    useEffect(() => {
        const generateFloatingElements = (): void => {
            const elements: FloatingElement[] = [];
            for (let i = 0; i < 20; i++) {
                elements.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 6 + 2,
                    speed: Math.random() * 1.5 + 0.5,
                    opacity: Math.random() * 0.4 + 0.2,
                    type: Math.random() > 0.7 ? 'neural' : 'particle'
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
                    y: (el.y + el.speed * 0.08) % 100,
                    x: el.x + Math.sin(time + el.id) * 0.05,
                    opacity: el.type === 'neural'
                        ? 0.2 + Math.sin(time * 2 + el.id) * 0.3 + 0.3
                        : el.opacity
                }))
            );
        };

        const interval = setInterval(animateElements, 60);
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

    // AI-specialized background patterns
    const renderBackgroundPattern = (pattern: string): JSX.Element | null => {
        switch (pattern) {
            case 'neural':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="neural" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                                <circle cx="12.5" cy="12.5" r="1.5" fill="currentColor" opacity="0.6" />
                                <circle cx="6" cy="8" r="1" fill="currentColor" opacity="0.4" />
                                <circle cx="19" cy="7" r="1" fill="currentColor" opacity="0.4" />
                                <circle cx="8" cy="18" r="1" fill="currentColor" opacity="0.4" />
                                <circle cx="17" cy="19" r="1" fill="currentColor" opacity="0.4" />
                                <path d="M6,8 L12.5,12.5 M19,7 L12.5,12.5 M12.5,12.5 L8,18 M12.5,12.5 L17,19"
                                    stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#neural)" />
                    </svg>
                );
            case 'vision':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-12" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="vision" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="7" y="7" width="6" height="6" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
                                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.6" />
                                <path d="M4,10 Q10,6 16,10 Q10,14 4,10" stroke="currentColor" strokeWidth="0.3" fill="none" opacity="0.3" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#vision)" />
                    </svg>
                );
            case 'robotics':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-12" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="robotics" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                                <rect x="5" y="5" width="5" height="5" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.4" />
                                <circle cx="3" cy="3" r="0.8" fill="currentColor" opacity="0.5" />
                                <circle cx="12" cy="3" r="0.8" fill="currentColor" opacity="0.5" />
                                <circle cx="7.5" cy="12" r="0.8" fill="currentColor" opacity="0.5" />
                                <path d="M3,3 L5,5 M12,3 L10,5 M7.5,12 L7.5,10" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#robotics)" />
                    </svg>
                );
            case 'nlp':
                return (
                    <div className="absolute inset-0 opacity-8 text-current font-mono text-xs leading-relaxed overflow-hidden">
                        <div className="p-4 space-y-1">
                            <div>{"tokenize(\"Hello AI world\")"}</div>
                            <div>{"[BERT] → embeddings"}</div>
                            <div>{"attention_weights = softmax(Q·K^T)"}</div>
                            <div>{"transformer.encode()"}</div>
                            <div>{"sentiment: positive (0.94)"}</div>
                            <div>{"entities: [ORG, PER, LOC]"}</div>
                        </div>
                    </div>
                );
            case 'software':
                return (
                    <div className="absolute inset-0 opacity-10 text-current font-mono text-xs leading-relaxed overflow-hidden">
                        <pre className="p-4">
                            {`@app.post("/predict")
async def predict(data: InputData):
    model = load_model("ai_model.pkl")
    result = model.predict(data.features)
    return {"prediction": result}

# MLOps Pipeline
mlflow.start_run()
model.fit(X_train, y_train)
mlflow.log_metric("accuracy", 0.98)`}
                        </pre>
                    </div>
                );
            case 'analytics':
                return (
                    <svg className="absolute inset-0 w-full h-full opacity-12" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="analytics" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="3" y="12" width="2" height="6" fill="currentColor" opacity="0.4" />
                                <rect x="6" y="10" width="2" height="8" fill="currentColor" opacity="0.5" />
                                <rect x="9" y="8" width="2" height="10" fill="currentColor" opacity="0.6" />
                                <rect x="12" y="6" width="2" height="12" fill="currentColor" opacity="0.7" />
                                <rect x="15" y="4" width="2" height="14" fill="currentColor" opacity="0.8" />
                                <path d="M4,12 L7,10 L10,8 L13,6 L16,4" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#analytics)" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <section ref={sectionRef} className="relative py-20 lg:py-32 bg-black overflow-hidden">
            {/* Background with AI floating elements */}
            <div className="absolute inset-0">
                {floatingElements.map(el => (
                    <div
                        key={el.id}
                        className={`absolute rounded-full transition-all duration-100 ${el.type === 'neural'
                            ? 'bg-[#6b7db8]/40 animate-pulse'
                            : 'bg-[#6b7db8]/20'
                            }`}
                        style={{
                            left: `${el.x}%`,
                            top: `${el.y}%`,
                            width: `${el.size}px`,
                            height: `${el.size}px`,
                            opacity: el.opacity,
                            filter: el.type === 'neural' ? 'blur(1px)' : 'blur(0.5px)',
                            transform: el.type === 'neural'
                                ? `scale(${1 + Math.sin(neuralAnimation + el.id) * 0.3})`
                                : 'none'
                        }}
                    />
                ))}
            </div>

            {/* Neural network background animation */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    {[...Array(8)].map((_, i) => (
                        <path
                            key={i}
                            d={`M${10 + i * 12},${20 + Math.sin(neuralAnimation + i) * 15} Q50,50 ${90 - i * 8},${80 + Math.cos(neuralAnimation + i) * 15}`}
                            stroke="#6b7db8"
                            strokeWidth="0.1"
                            fill="none"
                            opacity={0.3 + Math.sin(neuralAnimation * 2 + i) * 0.2}
                        />
                    ))}
                </svg>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-2 h-2 bg-[#6b7db8] rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-[#6b7db8]/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-10 w-1 h-1 bg-[#6b7db8]/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#8a9fd9]/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Header Section */}
                <div className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <div className="inline-block mb-6">
                        <Badge className="px-6 py-3 bg-[#6b7db8]/10 border border-[#6b7db8]/20 text-[#6b7db8] uppercase text-sm font-semibold tracking-widest rounded-full backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                            AI Excellence & Innovation
                        </Badge>
                    </div>

                    <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
                        <span className="bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent">
                            Our AI Expertise
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] bg-clip-text text-transparent">
                            Domains
                        </span>
                    </h2>

                    <p className="text-lg lg:text-xl text-[#6b6b6b] leading-relaxed max-w-3xl mx-auto">
                        Synthi AI masters the most advanced artificial intelligence technologies to create
                        innovative solutions that transform industries and shape Africa&apos;s digital future.
                    </p>
                </div>

                {/* Domains Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 mb-16">
                    {expertiseDomains.map((domain, index) => (
                        <Card
                            key={domain.id}
                            className={`group relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 border border-[#6b7db8]/20 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-[#6b7db8]/25 transition-all duration-700 hover:-translate-y-4 hover:scale-105 overflow-hidden cursor-pointer ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                }`}
                            style={{ transitionDelay: `${index * 0.12}s` }}
                            onMouseEnter={() => setActiveCard(domain.id)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            <CardContent className="relative p-0 h-full">

                                {/* Card Image */}

                                <div className="relative w-full h-48 overflow-hidden rounded-t-3xl">
                                    <Image
                                        src={domain.image}
                                        alt={domain.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        priority={index === 0} // Optionally prioritize the first image
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>

                                    {/* Icon overlay */}
                                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${domain.color} p-3 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="text-white w-full h-full flex items-center justify-center">
                                            {domain.icon}
                                        </div>
                                    </div>
                                </div>


                                {/* Card Content */}
                                <div className="p-6 lg:p-8 relative">
                                    {/* Background Pattern */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-5 group-hover:opacity-12 transition-opacity duration-500`}>
                                        {renderBackgroundPattern(domain.bgPattern)}
                                    </div>

                                    {/* Header */}
                                    <div className="relative z-10 mb-4">
                                        <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#ebf1ff] to-[#b3c0de] bg-clip-text text-transparent mb-2 group-hover:from-white group-hover:to-[#ebf1ff] transition-all duration-300">
                                            {domain.title}
                                        </h3>

                                        <p className="text-[#6b7db8] text-sm font-medium mb-4 group-hover:text-[#8a9fd9] transition-colors duration-300">
                                            {domain.subtitle}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-[#6b6b6b] text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                                        {domain.description}
                                    </p>

                                    {/* Specialties */}
                                    <div className="mb-6 relative z-10">
                                        <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <Target className="w-3 h-3 text-[#6b7db8]" />
                                            Specialties
                                        </h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {domain.specialties.map((specialty, specIndex) => (
                                                <div key={specIndex} className="flex items-center gap-2 text-xs text-[#6b6b6b]">
                                                    <div className="w-1 h-1 bg-[#6b7db8] rounded-full"></div>
                                                    <span className="group-hover:text-gray-300 transition-colors duration-300">{specialty}</span>
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
                                            {domain.technologies.slice(0, 4).map((tech, techIndex) => (
                                                <Badge
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-[#6b7db8]/20 text-[#6b7db8] border border-[#6b7db8]/30 text-xs rounded-lg hover:bg-[#6b7db8]/30 hover:scale-105 transition-all duration-200"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                            {domain.technologies.length > 4 && (
                                                <Badge className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg">
                                                    +{domain.technologies.length - 4}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}