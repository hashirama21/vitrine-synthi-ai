"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronUp } from "lucide-react";

/* ──────────────────────────────────────────────
   TYPES
   ────────────────────────────────────────────── */
interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}

interface CategorySection {
  id: string;
  label: string;
  items: PortfolioItem[];
}

interface InsightArticle {
  title: string;
  description: string;
  date: string;
  tag: string;
  image: string;
}

/* ──────────────────────────────────────────────
   DATA — Categories & Portfolio Items
   ────────────────────────────────────────────── */
const categories: CategorySection[] = [
  {
    id: "agriculture",
    label: "Agriculture & AgriTech",
    items: [
      {
        id: "farms-to-market",
        title: "Farm'sToMarket",
        description:
          "A transformative digital platform revolutionizing agriculture with AI-driven crop yield prediction, computer vision for crop and livestock monitoring, optimized delivery through smart logistics, an intelligent marketplace, integrated banking, and real-time price exchange for sustainable and profitable agro-pastoral ecosystems.",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
        href: "http://farmstomarket.synthi-ai.com/",
      },
      {
        id: "precision-farming",
        title: "Precision Farming AI",
        description:
          "Advanced computer vision algorithms for soil analysis, irrigation optimization, and precision agriculture. Our models analyze satellite imagery and drone footage to provide actionable insights for maximizing crop yields while minimizing resource consumption.",
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
      },
      {
        id: "crop-disease",
        title: "Crop Disease Detection",
        description:
          "Deep learning models trained on extensive datasets of African crop diseases, enabling early detection and prevention through mobile-based image analysis. Supports maize, cassava, cocoa, and over 30 local crop varieties.",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",
      },
      {
        id: "livestock-monitoring",
        title: "Livestock Surveillance",
        description:
          "IoT-enabled AI monitoring systems for livestock health tracking, behavior analysis, and automated feeding optimization. Real-time alerts for disease symptoms and abnormal patterns across herds.",
        image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop",
      },
      {
        id: "smart-irrigation",
        title: "Smart Irrigation Systems",
        description:
          "AI-powered water management using soil sensors, weather prediction models, and evapotranspiration analysis. Reduces water usage by up to 40% while maintaining optimal crop growth conditions.",
        image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&h=400&fit=crop",
      },
      {
        id: "harvest-forecasting",
        title: "Harvest Yield Forecasting",
        description:
          "Machine learning models combining historical data, satellite imagery, and climate patterns to predict harvest volumes with 95%+ accuracy, enabling better supply chain planning and market positioning.",
        image: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "food-logistics",
    label: "Food & Logistics",
    items: [
      {
        id: "ndinga-eats",
        title: "Ndinga Eats",
        description:
          "A revolutionary food delivery platform connecting urban consumers with restaurants, supermarkets, and local vendors, offering geolocated delivery, flexible payments, and a digital infrastructure for inclusive economic growth in Africa.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
        href: "/solutions/ndinga-eats",
      },
      {
        id: "supply-chain",
        title: "AI Supply Chain Optimization",
        description:
          "End-to-end supply chain intelligence using predictive analytics for demand forecasting, route optimization, and inventory management. Reduces food waste by up to 30% through intelligent cold chain monitoring.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      },
      {
        id: "quality-control",
        title: "Food Quality Control",
        description:
          "Computer vision-based quality assessment systems for food processing facilities. Automated detection of defects, contamination, and ripeness levels using advanced image classification models.",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&h=400&fit=crop",
      },
      {
        id: "smart-marketplace",
        title: "Smart Marketplace Analytics",
        description:
          "AI-driven pricing algorithms, demand prediction, and vendor matching systems. Dynamic pricing models that adapt to market conditions, seasonality, and consumer behavior for optimal marketplace efficiency.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "artificial-intelligence",
    label: "Intelligence Artificielle",
    items: [
      {
        id: "ubora-ai",
        title: "UBora AI",
        description:
          "An AI-driven platform optimizing resource management and decision-making in critical sectors like health and environment, leveraging advanced data analytics for predictive modeling and crisis anticipation.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        href: "https://ubora-ai.synthi-ai.com",
      },
      {
        id: "nlp-african",
        title: "NLP for African Languages",
        description:
          "State-of-the-art natural language processing models supporting over 50 African languages including Swahili, Yoruba, Hausa, Wolof, and Lingala. Sentiment analysis, translation, and text generation tailored for continental diversity.",
        image: "https://images.unsplash.com/photo-1655720828018-edd71de8949c?w=600&h=400&fit=crop",
      },
      {
        id: "computer-vision",
        title: "Computer Vision Platform",
        description:
          "Comprehensive computer vision toolkit for object detection, image segmentation, and visual recognition. Optimized for edge deployment on low-power devices commonly used across African infrastructure.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      },
      {
        id: "predictive-analytics",
        title: "Predictive Analytics Engine",
        description:
          "Advanced time-series forecasting and anomaly detection algorithms for business intelligence. From financial forecasting to equipment failure prediction, our models deliver actionable insights with 98.7% accuracy.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      },
      {
        id: "edge-ai",
        title: "Edge AI & Model Optimization",
        description:
          "Neural network pruning, quantization, and knowledge distillation techniques enabling deployment of powerful AI models on resource-constrained edge devices. Optimized for ARM architectures and mobile chipsets.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      },
      {
        id: "data-platform",
        title: "Data Platform & Lake",
        description:
          "Scalable data infrastructure for collecting, processing, and analyzing petabytes of structured and unstructured data. Built-in data governance, lineage tracking, and automated quality pipelines.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "digital-transformation",
    label: "Digital Transformation",
    items: [
      {
        id: "kamerheaven",
        title: "KamerHeaven",
        description:
          "A technology ecosystem accelerating digitalization in Africa, providing localized, innovative solutions to enhance access to services in agriculture, health, and education, tailored to regional needs.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        href: "https://heaven.synthi-ai.com",
      },
      {
        id: "cloud-solutions",
        title: "Cloud AI Infrastructure",
        description:
          "Enterprise-grade cloud infrastructure optimized for AI workloads. Auto-scaling GPU clusters, managed MLOps pipelines, and serverless inference endpoints for seamless AI deployment across Africa.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
      },
      {
        id: "digital-identity",
        title: "Digital Identity Solutions",
        description:
          "Secure biometric identification systems using face recognition, fingerprint analysis, and voice authentication. Privacy-preserving identity verification for financial inclusion and government services.",
        image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&h=400&fit=crop",
      },
      {
        id: "process-automation",
        title: "Intelligent Process Automation",
        description:
          "AI-powered robotic process automation (RPA) for enterprises. Document processing, workflow automation, and intelligent decision-making systems that reduce operational costs by up to 60%.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "health-medtech",
    label: "Health & MedTech",
    items: [
      {
        id: "healthsync-ai",
        title: "HealthSync AI",
        description:
          "An AI-powered medical solution enhancing healthcare delivery through predictive diagnostics, patient monitoring, and personalized treatment plans, integrating IoT and real-time analytics for improved health outcomes.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
        href: "/solutions/healthsync-ai",
      },
      {
        id: "medical-imaging",
        title: "Medical Imaging Analysis",
        description:
          "Deep learning-based radiology assistance for X-ray, CT scan, and ultrasound analysis. Early detection of tuberculosis, malaria, and other prevalent conditions with sensitivity rates exceeding 96%.",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
      },
      {
        id: "telemedicine",
        title: "AI-Powered Telemedicine",
        description:
          "Remote healthcare platform with AI triage, symptom analysis, and automated preliminary diagnostics. Connects patients in rural areas with specialists through intelligent referral systems and real-time consultations.",
        image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop",
      },
      {
        id: "drug-discovery",
        title: "Drug Discovery & Research",
        description:
          "AI-accelerated pharmaceutical research focusing on tropical diseases. Molecular simulation, protein folding prediction, and compound screening to identify promising drug candidates 10x faster than traditional methods.",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
      },
      {
        id: "vital-signs",
        title: "Contactless Vital Signs Monitoring",
        description:
          "Non-invasive monitoring of heart rate, respiratory rate, and blood oxygen using computer vision and signal processing. Ideal for remote patient monitoring and maternal health tracking in underserved regions.",
        image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "education",
    label: "Education & Training",
    items: [
      {
        id: "edugrow-ai",
        title: "EduGrow AI",
        description:
          "An innovative educational platform leveraging AI to democratize learning, offering personalized curriculums, real-time performance analytics, and accessible digital tools for students and educators.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
        href: "/solutions/edugrow-ai",
      },
      {
        id: "ai-academy",
        title: "Synthi AI Academy",
        description:
          "Comprehensive AI training programs designed for African talent. From introductory courses to advanced machine learning certifications, building the next generation of AI engineers and researchers on the continent.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      },
      {
        id: "adaptive-learning",
        title: "Adaptive Learning Engine",
        description:
          "AI-driven personalized learning paths that adapt in real-time to student performance, learning style, and pace. Supports multiple languages and offline-first architecture for low-connectivity environments.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      },
      {
        id: "content-generation",
        title: "Educational Content Generation",
        description:
          "Automated creation of educational materials, quizzes, and assessments using large language models fine-tuned on African curricula. Multi-language support with cultural context preservation.",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "smart-city",
    label: "Smart City & Infrastructure",
    items: [
      {
        id: "smart-traffic",
        title: "Smart Traffic Management",
        description:
          "AI-powered traffic flow optimization using computer vision at intersections. Adaptive signal control, congestion prediction, and emergency vehicle prioritization reducing average commute times by 25%.",
        image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
      },
      {
        id: "energy-management",
        title: "Smart Energy Management",
        description:
          "Intelligent energy grid optimization using load forecasting, renewable integration, and demand response algorithms. Reduces energy waste and enables efficient distribution in both urban and rural electrification projects.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
      },
      {
        id: "waste-management",
        title: "AI Waste Management",
        description:
          "Computer vision-based waste classification and route optimization for collection services. Smart bin monitoring with fill-level sensors and automated scheduling for sustainable urban waste management.",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
      },
      {
        id: "security-surveillance",
        title: "Urban Security & Surveillance",
        description:
          "Privacy-preserving video analytics for public safety. Crowd density monitoring, incident detection, and emergency response coordination using edge-deployed AI models with real-time alert systems.",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise Solutions",
    items: [
      {
        id: "enterprise-ai",
        title: "Enterprise AI Suite",
        description:
          "Comprehensive AI integration for large organizations. From intelligent document processing and automated compliance to customer service chatbots and HR analytics, transforming business operations at scale.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      },
      {
        id: "fintech-ai",
        title: "FinTech AI Solutions",
        description:
          "AI-powered financial services including credit scoring for the unbanked, fraud detection, mobile money analytics, and algorithmic trading. Designed for African financial markets and mobile-first economies.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      },
      {
        id: "cybersecurity",
        title: "AI Cybersecurity",
        description:
          "Next-generation threat detection and response using behavioral analytics, anomaly detection, and automated incident response. Protecting digital infrastructure with 99.9% threat identification accuracy.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      },
      {
        id: "customer-analytics",
        title: "Customer Intelligence",
        description:
          "360-degree customer analytics platform combining demographic analysis, sentiment tracking, and behavioral predictions. Personalized engagement strategies that increase retention by up to 45%.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      },
    ],
  },
  {
    id: "research",
    label: "Research & Innovation",
    items: [
      {
        id: "ai-research-lab",
        title: "Synthi AI Research Lab",
        description:
          "Cutting-edge research in machine learning, NLP, and computer vision focused on solving uniquely African challenges. Publishing peer-reviewed papers and open-source contributions advancing the field.",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&h=400&fit=crop",
      },
      {
        id: "synthetic-data",
        title: "Synthetic Dataset Generation",
        description:
          "AI-generated synthetic training data for privacy-preserving model development. Generative adversarial networks creating realistic, balanced datasets that address bias and data scarcity challenges.",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop",
      },
      {
        id: "federated-learning",
        title: "Federated Learning Platform",
        description:
          "Decentralized machine learning enabling collaborative model training across institutions without sharing sensitive data. Ideal for healthcare, finance, and government use cases requiring strict data sovereignty.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      },
      {
        id: "ar-interfaces",
        title: "AR & Human Interfaces",
        description:
          "Augmented reality solutions and gesture-based interfaces using pose estimation and spatial understanding. Interactive training simulations, maintenance guides, and immersive educational experiences.",
        image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&h=400&fit=crop",
      },
    ],
  },
];

/* ──────────────────────────────────────────────
   DATA — Blog / Insights
   ────────────────────────────────────────────── */
const insights: InsightArticle[] = [
  {
    title: "How AI is Transforming Agriculture Across Africa",
    description:
      "From precision farming to supply chain optimization, discover how artificial intelligence is revolutionizing food production on the continent.",
    date: "Feb 15, 2025",
    tag: "Agriculture",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop",
  },
  {
    title: "Building NLP Models for Low-Resource African Languages",
    description:
      "The challenges and breakthroughs in developing natural language processing systems for over 2,000 African languages.",
    date: "Jan 28, 2025",
    tag: "Research",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
  },
  {
    title: "Edge AI: Deploying Models in Low-Connectivity Environments",
    description:
      "Strategies for optimizing neural networks to run efficiently on resource-constrained devices in rural African communities.",
    date: "Jan 10, 2025",
    tag: "Technology",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
  },
  {
    title: "Ethics in AI: An African Perspective",
    description:
      "Exploring the unique ethical considerations of deploying artificial intelligence solutions across diverse African cultures and economies.",
    date: "Dec 20, 2024",
    tag: "Ethics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
  {
    title: "Computer Vision for Healthcare in Sub-Saharan Africa",
    description:
      "How medical imaging AI is bridging the gap in diagnostics where specialist physicians are scarce.",
    date: "Dec 5, 2024",
    tag: "Healthcare",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
  },
  {
    title: "The Future of Smart Cities on the African Continent",
    description:
      "AI-driven urban solutions addressing traffic, energy, waste, and public safety challenges in rapidly growing African metropolises.",
    date: "Nov 18, 2024",
    tag: "Smart City",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop",
  },
];

/* ──────────────────────────────────────────────
   COMPONENT — Portfolio Card
   ────────────────────────────────────────────── */
function PortfolioCard({
  item,
  index,
  categoryLabel,
}: {
  item: PortfolioItem;
  index: number;
  categoryLabel: string;
}) {
  const isExternal = item.href?.startsWith("http");

  const cardContent = (
    <>
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>
      <div className="p-5">
        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-2.5 bg-brand/10 text-brand-light">
          {categoryLabel}
        </span>
        <h3 className="text-white font-semibold text-[15px] leading-snug mb-1.5 group-hover:text-brand-light transition-colors duration-300 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-brand-lighter/70 text-sm leading-relaxed line-clamp-3">
          {item.description}
        </p>
      </div>
    </>
  );

  const cls =
    "group block rounded-xl border border-brand/10 bg-navy overflow-hidden transition-all duration-500 hover:border-brand/25 hover:shadow-xl hover:shadow-brand/5 hover:-translate-y-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      {item.href ? (
        <Link
          href={item.href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={cls}
        >
          {cardContent}
        </Link>
      ) : (
        <div className={cls}>{cardContent}</div>
      )}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   COMPONENT — Insight Card
   ────────────────────────────────────────────── */
function InsightCard({ article, index }: { article: InsightArticle; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group rounded-xl border border-brand/10 bg-navy overflow-hidden cursor-pointer transition-all duration-500 hover:border-brand/25 hover:shadow-xl hover:shadow-brand/5 hover:-translate-y-1"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="inline-block px-2.5 py-0.5 bg-brand/20 backdrop-blur-sm rounded-full text-brand-lighter text-[10px] font-semibold uppercase tracking-wider">
            {article.tag}
          </span>
        </div>
      </div>
      <div className="p-5">
        <span className="text-brand-lighter/50 text-xs">{article.date}</span>
        <h4 className="text-white font-semibold text-sm mt-1.5 mb-1.5 line-clamp-2 group-hover:text-brand-light transition-colors duration-300">
          {article.title}
        </h4>
        <p className="text-brand-lighter/60 text-sm leading-relaxed line-clamp-2">
          {article.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   PAGE
   ────────────────────────────────────────────── */
export default function SolutionsPortfolio() {
  const [activeSection, setActiveSection] = useState(categories[0].id);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const mobileTabsRef = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    const offset = 220;
    let current = categories[0].id;
    for (const cat of categories) {
      const el = sectionRefs.current[cat.id];
      if (el && el.getBoundingClientRect().top <= offset) {
        current = cat.id;
      }
    }
    setActiveSection(current);
    setShowBackToTop(window.scrollY > 500);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [onScroll]);

  useEffect(() => {
    const container = mobileTabsRef.current;
    if (!container) return;
    const btn = container.querySelector(`[data-cat="${activeSection}"]`) as HTMLElement | null;
    btn?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeSection]);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 130;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen bg-surface">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-48 -left-48 rounded-full blur-[140px] bg-brand/[0.04]" />
        <div className="absolute w-[500px] h-[500px] top-[40%] -right-40 rounded-full blur-[130px] bg-brand-dark/[0.05]" />
        <div className="absolute w-[400px] h-[400px] bottom-0 left-[30%] rounded-full blur-[120px] bg-navy-lighter/[0.08]" />
      </div>

      {/* ════════ HERO ════════ */}
      <section className="relative z-10 pt-32 sm:pt-40 pb-14 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7 }}
            className="w-14 h-0.5 bg-gradient-to-r from-brand to-brand-light mx-auto mb-8 rounded-full"
          />
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95]"
          >
            The things
            <br />
            <span className="bg-gradient-to-r from-brand-light via-brand to-brand-light bg-clip-text text-transparent">
              we build.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-5 text-lg sm:text-xl text-brand-lighter/70 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering Africa through ethical, high-performance AI solutions.
            Explore our portfolio of cutting-edge projects across 9 industries.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-8"
          >
            {/**
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-brand/20 hover:shadow-brand/30 hover:scale-[1.03]"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>  */}
          </motion.div>
        {/**
  <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: "47+", label: "AI Models Deployed" },
              { value: "15+", label: "Countries Served" },
              { value: "500+", label: "Projects Delivered" },
              { value: "98.7%", label: "Model Accuracy" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-brand-lighter/50 mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
         */}
        </div>
      </section>

      {/* ════════ MOBILE / TABLET — Horizontal sticky tabs (< xl) ════════ */}
      <div className="sticky top-[72px] sm:top-[80px] z-30 xl:hidden bg-surface/95 backdrop-blur-lg border-b border-brand/10">
        <div
          ref={mobileTabsRef}
          className="flex gap-1 overflow-x-auto px-4 py-3 no-scrollbar"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              data-cat={cat.id}
              onClick={() => scrollTo(cat.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 flex-shrink-0 ${
                activeSection === cat.id
                  ? "bg-brand text-white"
                  : "text-brand-lighter/60 hover:text-white hover:bg-navy-light"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ════════ MAIN — Sidebar (xl) + Content grid ════════ */}
      <main className="relative z-10 pb-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:flex xl:gap-10">

          {/* Desktop Sidebar */}
          <aside className="hidden xl:block w-64 flex-shrink-0">
            <nav className="sticky top-[100px] py-4">
              <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-lighter/40 mb-5 pl-4">
                Navigation
              </span>
              <div className="space-y-1">
                {categories.map((cat) => {
                  const isActive = activeSection === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => scrollTo(cat.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-[14px] font-medium transition-all duration-300 relative ${
                        isActive
                          ? "text-white bg-navy-light"
                          : "text-brand-lighter/50 hover:text-brand-lighter hover:bg-navy-light/50"
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-brand transition-all duration-300 ${
                          isActive ? "h-6 opacity-100" : "h-0 opacity-0"
                        }`}
                      />
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </nav>
          </aside>

          {/* Content area */}
          <div className="flex-1 min-w-0">
            {categories.map((category) => (
              <section
                key={category.id}
                ref={(el) => { sectionRefs.current[category.id] = el; }}
                className="pt-14 sm:pt-16 first:pt-6 xl:first:pt-10"
              >
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    {category.label}
                  </h2>
                  <div className="mt-2.5 w-16 h-0.5 bg-gradient-to-r from-brand to-brand-light rounded-full" />
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {category.items.map((item, idx) => (
                    <PortfolioCard
                      key={item.id}
                      item={item}
                      index={idx}
                      categoryLabel={category.label.split(" & ")[0]}
                    />
                  ))}
                </div>
              </section>
            ))}

            {/* Insights & Updates */}
            <section className="mt-28">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Insights and updates
                </h2>
                <p className="mt-3 text-brand-lighter/60 text-base max-w-xl mx-auto">
                  Stay informed about the latest developments in African AI
                  innovation and our ongoing research.
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {insights.map((article, idx) => (
                  <InsightCard key={article.title} article={article} index={idx} />
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <section className="mt-28">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-brand-dark/80 to-brand/60" />
                <div className="absolute inset-0 opacity-[0.06]">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="cta-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                        <circle cx="1.5" cy="1.5" r="0.8" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#cta-grid)" />
                  </svg>
                </div>
                <div className="relative z-10 px-8 sm:px-14 py-14 sm:py-16 text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    Empower your future with Synthi AI
                  </h2>
                  <p className="text-brand-lighter/70 text-base max-w-xl mx-auto mb-8 leading-relaxed">
                    Ready to harness the power of AI for your business or
                    institution? Contact us today to explore how Synthi AI can
                    tailor cutting-edge solutions to your specific needs.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-white text-navy font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:bg-brand-lightest hover:scale-[1.03] shadow-lg"
                    >
                      Get in touch
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                    >
                      Learn about us
                    </Link>
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
        </div>
      </main>

      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-40 w-11 h-11 rounded-full bg-brand text-white shadow-lg shadow-brand/25 flex items-center justify-center hover:bg-brand-dark transition-colors duration-300"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
    </div>
  );
}
