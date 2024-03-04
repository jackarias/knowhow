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
helm install [RELEASE_NAME] argo/argo-cd --namespace=[NAMESPACE] 
`

**Kustomize**
Los archivos se encuentran en el directorio "Kustomize" y el Application se instala del siguiente modo.
`kubectl apply -k kustomize`

**Helm**


## Yapa (Helm chart multidespliegue)


---
