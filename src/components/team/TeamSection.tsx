"use client";

import { useState, useEffect } from 'react';
import TeamCard from './TeamCard';
import teamMembersData from '@/data/teamMembers.json';

type TeamMember = {
  id: number;
  slug: string;
  name: string;
  role: string;
  location: string;
  joinDate: string;
  image: string;
  bio: string;
  expertise: string[];
  social: {
    linkedin: string;
    twitter: string;
    github: string;
    email: string;
    website: string;
  };
};

export default function TeamSection() {
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    // Convert team members data to array
    const membersArray = Object.values(teamMembersData as Record<string, any>).map(member => ({
      id: member.id,
      slug: member.slug,
      name: member.name,
      role: member.role,
      location: member.location,
      joinDate: member.joinDate,
      image: member.image,
      bio: member.bio,
      expertise: member.expertise,
      social: member.social
    }));
    setMembers(membersArray);
  }, []);

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-6">
            Meet Our Team
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Our diverse team of AI experts, developers, and innovators are passionate about
            transforming Africa through cutting-edge artificial intelligence solutions.
          </p>
          <div className="mt-8 text-center">
            <p className="text-blue-400 text-sm font-medium flex items-center justify-center gap-2">
              <span>💡</span>
              <span>Click on any team member to connect on LinkedIn</span>
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}