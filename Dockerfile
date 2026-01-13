FROM nginx:alpine

LABEL maintainer="TP DevOps"
LABEL description="Application DevOps containerisée avec Nginx"

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY src/ /usr/share/nginx/html/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -q --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
