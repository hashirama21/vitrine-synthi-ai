// Fichier: models/Solution.ts - Version complète avec tous les types

export type SolutionStatus = 'active' | 'draft' | 'archived';
export type TechnologyType = 'framework' | 'librairie' | 'langage';

export interface Solution {
    id: string;
    slug: string;
    titre: string;
    description_courte: string;
    description_longue: string;
    images: string[];
    videos_demo: string[];
    technologies_utilisees: Technology[];
    icon?: string;
    categorie: SolutionCategory;
    fonctionnalites: string[];
    objectifs: Objective[];
    use_cases: UseCase[];
    liens_externes: string[];
    auteur: Author;
    date_de_creation: Date;
    statut: SolutionStatus;
    tags: string[];
}

export interface Technology {
    id: string;
    nom: string;
    type: TechnologyType;
    icone?: string;
    url_doc?: string;
}

export interface UseCase {
    id: string;
    titre: string;
    description: string;
    image?: string;
}

export interface Objective {
    id: string;
    titre: string;
    description: string;
    icon?: string;
}

export interface Author {
    id: string;
    nom: string;
    poste: string;
    photo?: string;
    email: string;
}

export interface SolutionFeature {
    id: string;
    title: string;
    description: string;
    icon: string;
}

// Types utilitaires pour les requêtes
export interface SolutionFilters {
    status?: SolutionStatus[];
    category?: SolutionCategory;
    technologies?: string[];
    author?: string;
    dateFrom?: Date;
    dateTo?: Date;
}

export interface PaginationOptions {
    page?: number;
    pageSize?: number;
    orderBy?: 'date_de_creation' | 'titre' | 'categorie';
    orderDirection?: 'asc' | 'desc';
}

export interface SolutionSearchOptions extends PaginationOptions {
    category?: SolutionCategory;
    technologies?: string[];
    useCache?: boolean;
}

export interface SolutionResponse {
    solutions: Solution[];
    total: number;
    hasMore: boolean;
    currentPage: number;
    totalPages: number;
}

// Types pour les formulaires et validation
export interface CreateSolutionData {
    titre: string;
    slug: string;
    description_courte: string;
    description_longue: string;
    categorie: SolutionCategory;
    technologies_utilisees: string[]; // IDs des technologies
    objectifs: string[]; // IDs des objectifs
    use_cases: string[]; // IDs des cas d'usage
    fonctionnalites: string[];
    liens_externes: string[];
    auteur: string; // ID de l'auteur
    statut: SolutionStatus;
}

export interface UpdateSolutionData extends Partial<CreateSolutionData> {
    id: string;
}

// Types pour les erreurs
export interface AppwriteError {
    code: number;
    message: string;
    type: string;
}

export interface ValidationError {
    field: string;
    message: string;
    code: string;
}

// Types pour les statistiques
export interface SolutionStats {
    totalSolutions: number;
    solutionsByCategory: Record<SolutionCategory, number>;
    solutionsByStatus: Record<SolutionStatus, number>;
    totalAuthors: number;
    totalTechnologies: number;
    recentSolutions: Solution[];
}

// CORRECTION: Enum correctement formaté
export enum SolutionCategory {
  MachineLearning = 'Machine Learning',
  ComputerVision = 'Computer Vision',
  Robotique = 'Robotique',
  IA = 'IA',
  Automatisation = 'Automatisation',
  Autres = 'Autres'
}

export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  SolutionCategory.MachineLearning,
  SolutionCategory.ComputerVision,
  SolutionCategory.Robotique,
  SolutionCategory.IA,
  SolutionCategory.Automatisation,
  SolutionCategory.Autres
];

export const SOLUTION_STATUSES: SolutionStatus[] = ['active', 'draft', 'archived'];

export const TECHNOLOGY_TYPES: TechnologyType[] = ['framework', 'librairie', 'langage'];

// Guards de type pour la validation
export function isSolutionStatus(value: string): value is SolutionStatus {
    return SOLUTION_STATUSES.includes(value as SolutionStatus);
}

export function isSolutionCategory(value: string): value is SolutionCategory {
    return SOLUTION_CATEGORIES.includes(value as SolutionCategory);
}

export function isTechnologyType(value: string): value is TechnologyType {
    return TECHNOLOGY_TYPES.includes(value as TechnologyType);
}

// Utilitaires de validation
export function validateSolution(data: Partial<CreateSolutionData>): ValidationError[] {
    const errors: ValidationError[] = [];

    if (!data.titre || data.titre.trim().length < 3) {
        errors.push({
            field: 'titre',
            message: 'Le titre doit contenir au moins 3 caractères',
            code: 'TITRE_TOO_SHORT'
        });
    }

    if (!data.slug || !/^[a-z0-9-]+$/.test(data.slug)) {
        errors.push({
            field: 'slug',
            message: 'Le slug doit contenir uniquement des lettres minuscules, chiffres et tirets',
            code: 'INVALID_SLUG'
        });
    }

    if (!data.description_courte || data.description_courte.trim().length < 10) {
        errors.push({
            field: 'description_courte',
            message: 'La description courte doit contenir au moins 10 caractères',
            code: 'DESCRIPTION_TOO_SHORT'
        });
    }

    if (!data.categorie || !isSolutionCategory(data.categorie)) {
        errors.push({
            field: 'categorie',
            message: 'Catégorie invalide',
            code: 'INVALID_CATEGORY'
        });
    }

    if (data.statut && !isSolutionStatus(data.statut)) {
        errors.push({
            field: 'statut',
            message: 'Statut invalide',
            code: 'INVALID_STATUS'
        });
    }

    return errors;
}