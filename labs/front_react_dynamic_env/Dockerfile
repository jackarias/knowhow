# Paso 1 - Copiar codigo, descargar librerias y armar proyecto
FROM node:16-alpine as build-deps
WORKDIR /app
COPY . .
RUN yarn install && yarn run build

# Paso 2 - Deploy en ambiente
FROM nginx:1.12-alpine
WORKDIR /app
COPY --from=build-deps /app/build /usr/share/nginx/html

# Configuración de NGINX
COPY --from=build-deps /app/nginx/default.conf /etc/nginx/conf.d

# Seteo de variables de entorno 
COPY --from=build-deps /app/entrypoint.sh /app/entrypoint.sh
COPY --from=build-deps /app/generate_env.sh /app/generate_env.sh
RUN chmod +x /app/entrypoint.sh /app/generate_env.sh

EXPOSE 5000

ENTRYPOINT ["/app/entrypoint.sh"]
