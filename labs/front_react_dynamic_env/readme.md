# Ejemplo React+NGINX - Asignación de valores de variable a través de parametros

Este repo puede buildearse directamente desde el raíz para construir un contenedor de ejemplo que tiene las siguientes caracteristicas:
- Un frontend React construido de modo que muestra una página simple mostrando el valor de una variable llamada `REACT_APP_RANDOM_VAR`.
- Un webserver nginx que escucha en el puerto 5000 del contenedor.
- El inicio del contenedor a través de un entrypoint que permite la asignación dinámica del valor de variable a utilizar en el sitio web de ejemplo.
  - Esto es posible por la configuración de los archivos: `entrypoint.sh generate_env.sh src/constants.js public/config.js public/index.html`

Su construcción se puede realizar del siguiente modo
```
docker build -t [CONTAINER_NAMETAG] .
```

Para su ejecución con los valores por defecto se puede usar
```
docker run -d -p [MACHINE_PORT]:5000 --name [CONTAINER_NAME] [CONTAINER_NAMETAG]
```

Caso contrario, se puede enviar el valor de la variable a través del parametro `A_RANDON_ENV_VAR` agregandola al comando anterior.
```
docker run -d -p [MACHINE_PORT]:5000 -e A_RANDOM_ENV_VAR="aSampleValue" --name [CONTAINER_NAME] [CONTAINER_NAMETAG]
```

---
