#!/usr/bin/env bash
# ============================================
#  GIGANTAO-AUTH-NOTIFY - Multi Environment Docker Starter
# ============================================

set -e

# --- Funções auxiliares ---
function show_help() {
  echo ""
  echo "🚀  Uso: ./start.sh [ambiente]"
  echo ""
  echo "Ambientes disponíveis:"
  echo "  local          → desenvolvimento local (localhost)"
  echo "  development    → ambiente de desenvolvimento"
  echo "  homologation   → ambiente de homologação"
  echo "  test           → ambiente de testes"
  echo "  production     → produção"
  echo ""
  echo "Exemplo:"
  echo "  ./start.sh local"
  echo ""
  exit 1
}

function cleanup() {
  echo ""
  echo "🧹 Encerrando containers do ambiente '$ENV'..."
  docker compose --profile "$ENV" down --remove-orphans
  echo "✅ Containers encerrados."
  exit 0
}

# --- Leitura de argumento ---
ENV="$1"

if [ -z "$ENV" ]; then
  show_help
fi

VALID_ENVS=("local" "development" "homologation" "test" "production")
if [[ ! " ${VALID_ENVS[*]} " =~ " ${ENV} " ]]; then
  echo "❌ Ambiente inválido: $ENV"
  show_help
fi

# --- Define Port e URL Path por projeto ---
PORT=""
URL_PATH="/api" # Caminho para o Swagger UI
case "$ENV" in
    local)        PORT="9300" ;;
    development)  PORT="9301" ;;
esac

# --- Limpeza e inicialização ---
echo ""
echo "🌍 Iniciando ambiente: $ENV"
echo "---------------------------------------------"

if [ -n "$PORT" ]; then
        echo "✅ Serviço disponível em: http://localhost:$PORT$URL_PATH"
        echo ""
    fi

trap cleanup SIGINT SIGTERM

# Usa o profile correspondente
echo "🐳 Subindo containers (Ctrl+C para parar)..."
docker compose --profile "$ENV" up --build --force-recreate --remove-orphans