/**
 * Types pour les solutions technologiques
 */

export interface Technology {
    id: string;
    nom: string;
    type: 'framework' | 'librairie' | 'langage';
    icone?: string; // ID du fichier dans Appwrite
    url_doc?: string;
  }
  
  export interface UseCase {
    id: string;
    titre: string;
    description: string;
    image?: string; // ID du fichier dans Appwrite
  }
  
  export interface Objective {
    id: string;
    titre: string;
    description: string;
    icon?: string; // ID du fichier dans Appwrite
  }
  
  export interface Author {
    id: string;
    nom: string;
    poste: string;
    photo?: string; // ID du fichier dans Appwrite
    email?: string;
  }
  
  export interface SolutionFeature {
    id: string;
    title: string;
    description: string;
    icon: string; // Nom d'icône ou chemin
  }
  
  export interface Solution {
    id: string;
    slug: string;
    titre: string;
    description_courte: string;
    description_longue: string;
    images: string[]; // IDs des fichiers dans Appwrite
    videos_demo: string[];
    technologies_utilisees: string[]; // IDs des documents technologies
    icon: string; // ID du fichier dans Appwrite
    categorie: 'Robotique' | 'IA' | 'Automatisation' | 'Autres';
    fonctionnalites: SolutionFeature[];
    objectifs: string[]; // IDs des documents objectifs
    use_cases: string[]; // IDs des documents use_cases
    liens_externes: string[];
    auteur: string; // ID du document auteur
    date_de_creation: string;
    statut: 'active' | 'draft' | 'archived';
  }
  
  // Types pour les réponses paginées
  export interface PaginatedResponse<T> {
    total: number;
    documents: T[];
  }