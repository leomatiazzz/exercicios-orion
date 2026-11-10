# Exercício 3 — boas práticas + múltiplos ambientes

## Objetivo
Aplicar boas práticas de build e configuração de ambientes distintos (**desenvolvimento** e **produção**).

## Diferenças entre os ambientes:
- **Desenvolvimento (`dev`)**:
  - Utiliza `Dockerfile.dev`.
  - Instala dependências completas incluindo `nodemon`.
  - Monta volume local para live-reload (edições no código refletem imediatamente sem rebuild).
- **Produção (`prod`)**:
  - Utiliza `Dockerfile.prod`.
  - Build otimizado, sem montagem de volumes locais.
  - Instalação limpa apenas com dependências de produção (`npm install --omit=dev`).
  - Execução segura com usuário não-root (`USER node`).

## Como executar

1. Certifique-se de estar na pasta do exercício:
   ```bash
   cd docker/exercicio-3
   ```

### 🛠️ Ambiente de desenvolvimento (dev)
```bash
# Iniciar o ambiente de desenvolvimento
docker compose -f docker-compose.dev.yml up --build

# Testar se está em modo dev e com live-reload ativo:
curl http://localhost:3000

# Parar o ambiente de dev:
docker compose -f docker-compose.dev.yml down
```

### 🚀 Ambiente de produção (prod)
```bash
# Iniciar o ambiente de produção
docker compose -f docker-compose.prod.yml up --build -d

# Testar se está em modo de produção:
curl http://localhost:3000

# Parar o ambiente de prod:
docker compose -f docker-compose.prod.yml down
```
