FROM node:21-alpine AS base

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:21-alpine AS runner

WORKDIR /app

COPY --from=base /app/public ./public
COPY --from=base /app/.next ./.next
COPY --from=base /app/package.json ./
COPY --from=base /app/yarn.lock ./

RUN yarn install --production --frozen-lockfile

EXPOSE 3000

CMD ["yarn", "start"]
