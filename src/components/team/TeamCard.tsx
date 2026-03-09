"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, MapPin, ExternalLink } from "lucide-react";

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

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    window.open(member.social.linkedin, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Main Card */}
      <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden backdrop-blur-sm">
        <CardContent className="p-6">
          {/* Profile Image */}
          <div className="relative mb-4">
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-slate-600/50 group-hover:border-blue-400/50 transition-colors duration-300">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-slate-700 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    {member.name.split(' ').map((n: string) => n[0]).join('')}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Member Info */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-blue-400 text-sm font-medium mb-2">{member.role}</p>
            <div className="flex items-center justify-center gap-1 text-slate-400 text-xs mb-3">
              <MapPin className="w-3 h-3" />
              <span>{member.location}</span>
            </div>

            {/* Top Skills */}
            <div className="flex flex-wrap gap-1 justify-center mb-4">
              {member.expertise.slice(0, 2).map((skill: string, index: number) => (
                <Badge
                  key={index}
                  className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs px-2 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* LinkedIn Indicator */}
            <div className="flex items-center justify-center gap-2 text-blue-400 text-sm">
              <Linkedin className="w-4 h-4" />
              <span>Click to connect</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hover Overlay with Bio */}
      <div
        className={`
          absolute inset-0 z-10 bg-slate-900/95 backdrop-blur-sm rounded-lg border border-blue-500/50
          transition-all duration-300 ease-out
          ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <div className="p-6 h-full flex flex-col justify-between">
          {/* Header */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
            <p className="text-blue-400 text-sm font-medium">{member.role}</p>
          </div>

          {/* Bio */}
          <div className="flex-1 flex items-center">
            <p className="text-slate-300 text-sm leading-relaxed text-center">
              {member.bio}
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            {/* Skills */}
            <div className="flex flex-wrap gap-1 justify-center">
              {member.expertise.slice(0, 3).map((skill: string, index: number) => (
                <Badge
                  key={index}
                  className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* LinkedIn Call to Action */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 text-blue-300 text-sm font-medium">
                <Linkedin className="w-4 h-4" />
                <span>Click anywhere to connect</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}