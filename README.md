# devops-tp-docker-ulrich# TP DevSecOps avec Docker

![Build and Scan](https://github.com/azangue-cmd/devops-tp-docker-ulrich/actions/workflows/docker-deploy.yml/badge.svg)
![CodeQL](https://github.com/azangue-cmd/devops-tp-docker-ulrich/actions/workflows/codeql-analysis.yml/badge.svg)

## Pipeline DevSecOps

Ce projet implémente un pipeline CI/CD sécurisé pour Docker avec :

- Analyse statique du code (CodeQL)
- Lint du Dockerfile (Hadolint)
- Scan de l'image Docker (Trivy)
- Scan des dépendances (Dependabot)
- Secret Scanning GitHub
- Security Gates (blocage si vulnérabilités critiques)
- Génération de SBOM

## Sécurité de l'image

- Image de base Alpine à jour
- Utilisateur non-root
- Headers de sécurité Nginx
- Healthcheck
- Pas de secrets dans l’image

## Exécution locale

```bash
docker pull ghcr.io/azangue-cmd/devops-tp-docker-ulrich:main
docker run -p 8080:8080 ghcr.io/azangue-cmd/devops-tp-docker-ulrich:main
```
