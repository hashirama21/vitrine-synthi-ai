FROM node:21-alpine AS builder

ENV NODE_ENV=production
# Ajouter des variables d'environnement pour les fonts
ENV NEXT_FONT_GOOGLE_MOCKED_RESPONSES='[{"url":"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap","content":"/* Mocked font */"}]'

WORKDIR /app

# Installer des dépendances système pour résoudre les problèmes réseau
RUN apk add --no-cache \
    libc6-compat \
    curl \
    ca-certificates \
    && update-ca-certificates

COPY package.json yarn.lock ./

# Configuration yarn avec timeout et retry plus élevés
RUN yarn config set network-timeout 300000 && \
    yarn config set network-retry 3 && \
    yarn install --frozen-lockfile

COPY . .

# Build avec gestion d'erreur pour les fonts
RUN yarn build || (echo "Build failed, trying with font fallback..." && \
    NEXT_FONT_GOOGLE_MOCKED_RESPONSES='[{"url":"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap","content":"/* Fallback font */"}]' yarn build)

# Étape 2 : Runner minimal
FROM node:21-alpine AS runner

ENV NODE_ENV=production
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./

RUN yarn install --production --frozen-lockfile && yarn cache clean

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["yarn", "start"]
