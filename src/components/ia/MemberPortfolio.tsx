"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    Linkedin,
    Twitter,
    Github,
    Mail,
    MapPin,
    Calendar,
    Award,
    Users,
    Code,
    Brain,
    Rocket,
    ExternalLink,
    BookOpen
} from "lucide-react";
import teamMembersData from '@/data/teamMembers.json';

type TeamMember = {
  id: number;
  slug: string;
  name: string;
  role: string;
  location: string;
  joinDate: string;
  image: string;
  coverImage: string;
  bio: string;
  longBio: string;
  expertise: string[];
  social: {
    linkedin: string;
    twitter: string;
    github: string;
    email: string;
    website: string;
  };
  stats: Record<string, number>;
  achievements: Array<{
    title: string;
    organization: string;
    date: string;
    description: string;
  }>;
  projects: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    status: string;
    impact: string;
    link: string;
  }>;
  skills: Array<{
    name: string;
    level: number;
    category: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    specialization: string;
  }>;
  testimonials: Array<{
    text: string;
    author: string;
    role: string;
    avatar: string;
  }>;
};

interface MemberPortfolioProps {
    params?: { slug: string };
}

export default function MemberPortfolio({ params }: MemberPortfolioProps) {
    const router = useRouter();
    const urlParams = useParams();
    const slug = params?.slug || urlParams?.slug as string;

    const [activeTab, setActiveTab] = useState('overview');
    const [member, setMember] = useState<TeamMember | null>(null);
    const ref = useRef(null);

    useEffect(() => {
        if (slug && teamMembersData[slug as keyof typeof teamMembersData]) {
            setMember(teamMembersData[slug as keyof typeof teamMembersData] as TeamMember);
        }
    }, [slug]);

    if (!member) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-blue-400 text-6xl mb-4">404</div>
                    <h1 className="text-2xl font-bold text-white mb-4">Member Not Found</h1>
                    <Link href="/team">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Team
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const tabs = [
        { id: 'overview', label: 'Overview', icon: <Users className="w-4 h-4" /> },
        { id: 'projects', label: 'Projects', icon: <Rocket className="w-4 h-4" /> },
        { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
        { id: 'experience', label: 'Experience', icon: <Award className="w-4 h-4" /> }
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white" ref={ref}>

            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    {member.coverImage ? (
                        <Image src={member.coverImage} alt={`${member.name} cover`} fill className="object-cover" priority />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-600/30 to-slate-900"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30"></div>
                </div>

                {/* Back Button */}
                <div className="absolute top-8 left-8 z-20">
                    <Link href="/team">
                        <Button variant="outline" className="border-blue-400/30 bg-slate-900/50 backdrop-blur-sm hover:bg-blue-600/20 hover:border-blue-400/50 transition-all duration-200">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Team
                        </Button>
                    </Link>
                </div>

                {/* Main Content */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Profile Image */}
                            <div className="flex justify-center lg:justify-end">
                                <div className="relative">
                                    <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[rgb(59 130 246)]/30 shadow-2xl">
                                        {member.image ? (
                                            <Image src={member.image} alt={member.name} fill className="object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-[rgb(59 130 246)]/20 to-gray-900/80 flex items-center justify-center">
                                                <span className="text-6xl font-bold text-white">
                                                    {member.name.split(' ').map((n: string) => n[0]).join('')}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Floating stats */}
                                    <div className="absolute -top-4 -right-4 bg-[rgb(59 130 246)] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        {member.stats.yearsExperience}+ Years
                                    </div>
                                </div>
                            </div>

                            {/* Profile Info */}
                            <div className="text-center lg:text-left space-y-6">
                                <div>
                                    <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[rgb(248 250 252)] to-[rgb(203 213 225)] bg-clip-text text-transparent leading-tight">
                                        {member.name}
                                    </h1>
                                    <p className="text-2xl text-[rgb(59 130 246)] font-semibold mt-2">{member.role}</p>
                                </div>

                                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                    <div className="flex items-center gap-2 text-[rgb(148 163 184)]">
                                        <MapPin className="w-4 h-4" />
                                        <span>{member.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[rgb(148 163 184)]">
                                        <Calendar className="w-4 h-4" />
                                        <span>Joined {member.joinDate}</span>
                                    </div>
                                </div>

                                <p className="text-lg text-[rgb(148 163 184)] leading-relaxed max-w-2xl">
                                    {member.bio}
                                </p>

                                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                    {member.expertise.slice(0, 4).map((skill: string, index: number) => (
                                        <Badge key={index} className="bg-[rgb(59 130 246)]/20 text-[rgb(59 130 246)] border-[rgb(59 130 246)]/30 hover:bg-[rgb(59 130 246)]/30 transition-colors">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-4 justify-center lg:justify-start">
                                    <a href={member.social.linkedin} className="p-3 bg-[rgb(59 130 246)]/20 hover:bg-[rgb(59 130 246)]/40 text-[rgb(59 130 246)] rounded-xl transition-colors duration-300">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href={member.social.twitter} className="p-3 bg-[rgb(59 130 246)]/20 hover:bg-[rgb(59 130 246)]/40 text-[rgb(59 130 246)] rounded-xl transition-colors duration-300">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                    <a href={member.social.github} className="p-3 bg-[rgb(59 130 246)]/20 hover:bg-[rgb(59 130 246)]/40 text-[rgb(59 130 246)] rounded-xl transition-colors duration-300">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={`mailto:${member.social.email}`} className="p-3 bg-[rgb(59 130 246)]/20 hover:bg-[rgb(59 130 246)]/40 text-[rgb(59 130 246)] rounded-xl transition-colors duration-300">
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-[rgb(59 130 246)]/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-[rgb(59 130 246)] rounded-full mt-2"></div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-b from-black to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(member.stats).map(([key, value], index) => (
                            <div key={key} className="text-center group">
                                <Card className="bg-gray-900/50 border-[rgb(59 130 246)]/20 hover:border-[rgb(59 130 246)]/40 transition-all duration-300 p-6 hover:bg-gray-900/70 backdrop-blur-sm">
                                    <CardContent className="p-0">
                                        <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[rgb(248 250 252)] to-[rgb(203 213 225)] bg-clip-text text-transparent mb-2">
                                            {typeof value === 'number'
                                                ? value > 100
                                                    ? `${value}+`
                                                    : value
                                                : typeof value === 'string'
                                                    ? value
                                                    : null}
                                        </div>
                                        <div className="text-[rgb(148 163 184)] capitalize">
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Navigation Tabs */}
            <section className="sticky top-0 z-30 bg-black/90 backdrop-blur-sm border-b border-[rgb(59 130 246)]/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex space-x-8 overflow-x-auto py-4">
                        {tabs.map((tab) => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${activeTab === tab.id ? 'bg-[rgb(59 130 246)] text-white' : 'text-[rgb(148 163 184)] hover:text-[rgb(59 130 246)] hover:bg-[rgb(59 130 246)]/10'}`}>
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tab Content */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <div className="space-y-16">
                            {/* About Section */}
                            <div>
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[rgb(248 250 252)] to-[rgb(203 213 225)] bg-clip-text text-transparent mb-8">
                                    About {member.name}
                                </h2>
                                <div className="grid lg:grid-cols-2 gap-12">
                                    <div>
                                        <p className="text-[rgb(148 163 184)] leading-relaxed text-lg">{member.longBio}</p>
                                    </div>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-semibold text-white">Core Expertise</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            {member.expertise.map((skill: string, index: number) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <Brain className="w-4 h-4 text-[rgb(59 130 246)]" />
                                                    <span className="text-[rgb(148 163 184)]">{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Achievements */}
                            <div>
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[rgb(248 250 252)] to-[rgb(203 213 225)] bg-clip-text text-transparent mb-8">
                                    Achievements & Awards
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {member.achievements.map((achievement: any, index: number) => (
                                        <div key={index}>
                                            <Card className="bg-gray-900/50 border-[rgb(59 130 246)]/20 hover:border-[rgb(59 130 246)]/40 transition-all duration-300 p-6 h-full hover:bg-gray-900/70 backdrop-blur-sm">
                                                <CardContent className="p-0">
                                                    <Award className="w-8 h-8 text-[rgb(59 130 246)] mb-4" />
                                                    <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                                                    <p className="text-[rgb(59 130 246)] text-sm mb-2">{achievement.organization} • {achievement.date}</p>
                                                    <p className="text-[rgb(148 163 184)] text-sm leading-relaxed">{achievement.description}</p>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Testimonials */}
                            <div>
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[rgb(248 250 252)] to-[rgb(203 213 225)] bg-clip-text text-transparent mb-8">
                                    What Others Say
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {member.testimonials.map((testimonial: any, index: number) => (
                                        <div key={index}>
                                            <Card className="bg-gray-900/50 border-[rgb(59 130 246)]/20 p-8 backdrop-blur-sm">
                                                <CardContent className="p-0">
                                                    <div className="flex items-start gap-4">
                                                        <div className="flex-shrink-0">
                                                            <div className="w-12 h-12 rounded-full bg-[rgb(59 130 246)]/20 flex items-center justify-center">
                                                                <span className="text-[rgb(59 130 246)] font-semibold">
                                                                    {testimonial.author.split(' ').map((n: string) => n[0]).join('')}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="text-[rgb(148 163 184)] italic leading-relaxed mb-4">{testimonial.text}</p>
                                                            <div>
                                                                <p className="text-white font-semibold">{testimonial.author}</p>
                                                                <p className="text-[rgb(59 130 246)] text-sm">{testimonial.role}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Projects Tab */}
                    {activeTab === 'projects' && (
                        <div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-[rgb(248 250 252)] to-[rgb(203 213 225)] bg-clip-text text-transparent mb-8">
                                Featured Projects
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {member.projects.map((project: any, index: number) => (
                                    <div key={project.id} className="group">
                                        <Card className="bg-gray-900/50 border-[rgb(59 130 246)]/20 hover:border-[rgb(59 130 246)]/40 transition-all duration-500 overflow-hidden h-full hover:bg-gray-900/70 backdrop-blur-sm">
                                            <div className="relative h-48 overflow-hidden">
                                                {project.image ? (
                                                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                                ) : (
                                                    <div className="w-full h-full bg-gradient-to-br from-[rgb(59 130 246)]/20 to-gray-900/80 flex items-center justify-center">
                                                        <Rocket className="w-16 h-16 text-[rgb(59 130 246)]/50" />
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                                <div className="absolute top-4 right-4">
                                                    <Badge className={`${project.status === 'Live' ? 'bg-green-500/20 text-green-400 border-green-400/30' :
                                                            project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30' :
                                                                'bg-blue-500/20 text-blue-400 border-blue-400/30'
                                                        }`}>
                                                        {project.status}
                                                    </Badge>
                                                </div>
                                            </div>

                                            <CardContent className="p-6">
                                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[rgb(59 130 246)] transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-[rgb(148 163 184)] text-sm leading-relaxed mb-4">
                                                    {project.description}
                                                </p>

                                                <div className="space-y-4">
                                                    <div>
                                                        <p className="text-[rgb(59 130 246)] text-sm font-medium mb-2">Technologies:</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                                                                <Badge key={techIndex} variant="secondary" className="text-xs bg-[rgb(59 130 246)]/10 text-[rgb(59 130 246)] border-[rgb(59 130 246)]/20">
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                            {project.technologies.length > 3 && (
                                                                <Badge variant="secondary" className="text-xs bg-[rgb(59 130 246)]/10 text-[rgb(59 130 246)] border-[rgb(59 130 246)]/20">
                                                                    +{project.technologies.length - 3} more
                                                                </Badge>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p className="text-[rgb(59 130 246)] text-sm font-medium mb-1">Impact:</p>
                                                        <p className="text-[rgb(148 163 184)] text-sm">{project.impact}</p>
                                                    </div>

                                                    {project.link && (
                                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[rgb(59 130 246)] hover:text-white transition-colors text-sm">
                                                            <ExternalLink className="w-4 h-4" />
                                                            View Project
                                                        </a>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Skills Tab */}
                    {activeTab === 'skills' && (
                        <div className="space-y-12">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-[rgb(248 250 252)] to-[rgb(203 213 225)] bg-clip-text text-transparent">
                                Technical Skills
                            </h2>

                            <div className="grid lg:grid-cols-2 gap-12">
                                {['AI/ML', 'Programming', 'Management', 'Engineering', 'Backend', 'Frontend', 'Design', 'DevOps'].map((category) => {
                                    const categorySkills = member.skills.filter((skill: any) => skill.category === category);
                                    if (categorySkills.length === 0) return null;

                                    return (
                                        <div key={category}>
                                            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                                                <Code className="w-5 h-5 text-[rgb(59 130 246)]" />
                                                {category}
                                            </h3>
                                            <div className="space-y-4">
                                                {categorySkills.map((skill: any, index: number) => (
                                                    <div key={skill.name} className="group">
                                                        <div className="flex justify-between items-center mb-2">
                                                            <span className="text-white font-medium">{skill.name}</span>
                                                            <span className="text-[rgb(59 130 246)] text-sm">{skill.level}%</span>
                                                        </div>
                                                        <div className="w-full bg-gray-800 rounded-full h-2">
                                                            <div className="bg-gradient-to-r from-[rgb(59 130 246)] to-[#8a9fd9] h-2 rounded-full" style={{ width: `${skill.level}%` }} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Experience Tab */}
                    {activeTab === 'experience' && (
                        <div className="space-y-12">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-[rgb(248 250 252)] to-[rgb(203 213 225)] bg-clip-text text-transparent">
                                Education & Background
                            </h2>

                            <div className="space-y-8">
                                {member.education.map((edu: any, index: number) => (
                                    <div key={index}>
                                        <Card className="bg-gray-900/50 border-[rgb(59 130 246)]/20 hover:border-[rgb(59 130 246)]/40 transition-all duration-300 p-6 hover:bg-gray-900/70 backdrop-blur-sm">
                                            <CardContent className="p-0">
                                                <div className="flex items-start gap-4">
                                                    <div className="flex-shrink-0">
                                                        <BookOpen className="w-8 h-8 text-[rgb(59 130 246)]" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                                                        <p className="text-[rgb(59 130 246)] font-medium mb-1">{edu.institution}</p>
                                                        <p className="text-[rgb(148 163 184)] text-sm mb-2">Graduated: {edu.year}</p>
                                                        <p className="text-[rgb(148 163 184)] text-sm">Specialization: {edu.specialization}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 bg-gradient-to-t from-gray-900 to-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-[rgb(248 250 252)] to-[rgb(203 213 225)] bg-clip-text text-transparent mb-4">
                            Let&apos;s Work Together
                        </h2>
                        <p className="text-[rgb(148 163 184)] text-lg mb-8 max-w-2xl mx-auto">
                            Interested in collaborating with {member.name}? Get in touch to discuss opportunities.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button asChild className="bg-[rgb(59 130 246)] hover:bg-[rgb(37 99 235)] px-8 py-3">
                                <a href={`mailto:${member.social.email}`}>
                                    <Mail className="w-4 h-4 mr-2" />
                                    Send Message
                                </a>
                            </Button>
                            <Button variant="outline" asChild className="border-[rgb(59 130 246)]/30 text-[rgb(59 130 246)] hover:bg-[rgb(59 130 246)]/10 px-8 py-3">
                                <Link href="/team">
                                    <Users className="w-4 h-4 mr-2" />
                                    View Team
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}