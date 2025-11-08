# ---------------------------
# Etapa base
# ---------------------------
FROM node:20-alpine AS base

RUN apk add --no-cache bash tzdata iputils-ping \
    && cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime \
    && echo "America/Sao_Paulo" > /etc/timezone

WORKDIR /app

# Instala pnpm globalmente
RUN npm install -g pnpm

# Copia apenas package.json e lockfile para instalar dependências
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copia código da aplicação
COPY . .

# Expondo porta da API
EXPOSE 3103
