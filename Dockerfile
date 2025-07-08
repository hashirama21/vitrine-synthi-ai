FROM node:21-alpine AS builder
ENV NODE_ENV=production
WORKDIR /app

RUN apk add --no-cache libc6-compat curl ca-certificates

COPY package.json yarn.lock ./
RUN yarn config set network-timeout 300000 && \
    yarn config set network-retry 3 && \
    yarn install --frozen-lockfile

COPY . .

# Try to build, if it fails due to fonts, disable font optimization
RUN yarn build || (echo "Build failed, retrying with font optimization disabled..." && \
    NEXT_FONT_GOOGLE_MOCKED_RESPONSES='[]' yarn build)

FROM node:21-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./

RUN yarn install --production --frozen-lockfile && yarn cache clean

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["yarn", "start"]
