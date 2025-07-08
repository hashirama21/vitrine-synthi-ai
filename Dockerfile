FROM node:21-alpine AS builder

ENV NODE_ENV=production

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# Étape 2 : Runner minimal
FROM node:21-alpine AS runner

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./

RUN yarn install --production --frozen-lockfile

EXPOSE 3000

CMD ["yarn", "start"]
