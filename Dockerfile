# -----------------------------
# STAGE 1 — Base
# -----------------------------
FROM node:20-alpine AS base

ARG MY_UID=1001
ARG MY_GID=1001

# Instala dependências básicas e timezone
RUN apk add --no-cache tzdata dumb-init bash

ENV TZ=America/Sao_Paulo
ENV NODE_ENV=development

# Cria usuário não-root
RUN addgroup -g ${MY_GID} -S appgroup \
  && adduser -u ${MY_UID} -S appuser -G appgroup

WORKDIR /usr/src/app

# Instala pnpm globalmente
RUN npm install -g pnpm

# Dependências opcionais (Chromium, fontes etc. — útil se houver Puppeteer)
RUN apk add --no-cache chromium nss freetype harfbuzz ca-certificates ttf-freefont fontconfig dbus

# -----------------------------
# STAGE 2 — Dependências
# -----------------------------
FROM base AS deps

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# -----------------------------
# STAGE 3 — Build
# -----------------------------
FROM deps AS build

COPY . .
RUN pnpm run build || echo "Sem etapa de build, seguindo..."

# -----------------------------
# STAGE 4 — Runtime (final)
# -----------------------------
FROM base AS runtime

USER appuser
WORKDIR /usr/src/app

# Copia dependências e build final
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
COPY . .

EXPOSE 9300


# Configuração de execução por ambiente
# Pode ser sobrescrita via docker-compose (NODE_ENV e START_CMD)
ENV START_CMD="pnpm run dev"

CMD ["dumb-init", "sh", "-c", "$START_CMD"]
