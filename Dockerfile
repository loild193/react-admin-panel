FROM node:18.0-alpine3.15 AS deps

RUN apk add --no-cache libc6-compat git
WORKDIR /app
COPY package.json yarn.lock ./
ENV HUSKY=0
ENV CI=true
RUN npm i -g npm && yarn install --frozen-lockfile

# ----------------------------------------
FROM node:18.0-alpine3.15 AS builder

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN apk add --no-cache git
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# ----------------------------------------
FROM node:18.0-alpine3.15 AS release

WORKDIR /app

ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S reactjs -u 1001

COPY --from=builder --chown=reactjs:nodejs /app ./

USER reactjs

EXPOSE 3001

CMD [ "yarn", "start" ]