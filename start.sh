#!/usr/bin/env bash
# ============================================
#  API-PONTOTEL - Multi Environment Docker Starter
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
  echo "  ./start.sh homologation"
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

# --- Limpeza e inicialização ---
echo ""
echo "🌍 Iniciando ambiente: $ENV"
echo "---------------------------------------------"
trap cleanup SIGINT SIGTERM

# Usa o profile correspondente
echo "🐳 Subindo containers (Ctrl+C para parar)..."
docker compose --profile "$ENV" up --build --force-recreate --remove-orphans

# Cleanup será chamado automaticamente no Ctrl+C
