# Utiliser une image Node.js 21 comme base
FROM node:21-alpine AS base

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tous les fichiers de l'application
COPY . .

# Construire l'application Next.js
RUN npm run build

# Image pour l'exécution de l'application en production
FROM node:21-alpine AS runner

WORKDIR /app

# Copier les fichiers construits de l'étape précédente
COPY --from=base /app/public ./public
COPY --from=base /app/.next ./.next
COPY --from=base /app/package*.json ./

# Installer les dépendances nécessaires pour l'exécution
RUN npm install --production

# Exposer le port sur lequel l'application Next.js écoute
EXPOSE 3000

# Commande pour démarrer l'application Next.js
CMD ["npm", "start"]