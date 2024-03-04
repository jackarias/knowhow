# ArgoCD - Laboratorio básico demostrativo

## Requisitos y alcance
Requisitos:
 - Herramientas:
   - kubectl
   - helm
   - minikube (No probado en otras herramientas que emulen un cluster de k8s)
   - imagen del contenedor de la app de ejemplo que se encuentra en [labs/front_react_dynamic_env](TBD)
 - Directorios:
   - argocd
   - helm-charts
   - kustomize

Alcance:
 - Archivos de prueba con Kustomize.
 - Archivos de prueba con Helm.
 - Ejemplo de Application con Kustomize.
 - Ejemplo de ApplicationSet con Helm.
   - Despliegue de varios Application con un ApplicationSet.
   - Parametrización de cada Application.
> EXTRA: Alternativa solo Helm. Despliegue de varios microservicios con el mismo Chart.

## Despliegue en Argo

**ArgoCD**
En este caso realizamos la instalación por defecto utilizando el Chart de Helm de ArgoCD.
`helm repo add https://argoproj.github.io/argo-helm
helm install [RELEASE_NAME] argo/argo-cd --namespace=[NAMESPACE]`

**Kustomize**
Los archivos se encuentran en el directorio "Kustomize" y el Application se instala ArgoCD del siguiente modo.
`kubectl apply -f argocd/app-sample-web-kustomize.yaml`

**Helm**
Para este caso desplegaremos un ApplicationSet basandonos en el Chart "sample-web-chart". El ejemplo contiene 3 archivos generadores (directorio argocd/generators) para 3 Application diferentes. En el archivo de ApplicationSet se pueden observar las parametrizaciones con la forma "{{ VAR }}". El ApplicationSet se despliega sobre ArgoCD con el siguiente comando.
`kubectl apply -f appset-sample-web-chart.yaml`


## Yapa (Helm chart multidespliegue)
Si bien esto no es para desplegar con ArgoCD, vale la pena mencionar que es otro modo de desplegar varios microservicios. El condicionante en este caso es que comparten un configmap que será igual para todos (En el caso anterior podemos generar distintos values para cada uno de los microservicios). Para desplegarlo debemos tener creado un namespace y desplegarlo del siguiente modo.
`cd helm-charts/sample-web-chart-v2
helm dependency update
helm upgrade --install [RELEASE_NAME] -n [NAMESPACE] -f values.yaml .`

---
