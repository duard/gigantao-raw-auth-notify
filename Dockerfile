# ---------------------------
# Etapa base
# ---------------------------
FROM node:20-alpine AS base

# Instala pacotes essenciais + mysql-client
RUN apk add --no-cache bash tzdata iputils-ping mysql-client \
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

# Build the TypeScript application
RUN pnpm run build

# Expondo porta da API
EXPOSE 3103

# Comando para iniciar a aplicação
CMD ["pnpm", "start"]
