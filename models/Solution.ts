export interface Solution {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    introText: string;
    features: SolutionFeature[];
    tags: string[];
    image?: string;
}

export interface SolutionFeature {
    id: string;
    title: string;
    description: string;
    icon: string; // Path to icon or icon identifier
}