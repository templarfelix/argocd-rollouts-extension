# create ns argocd
kubectl create ns argocd

# start argocd
kustomize build . | kubectl apply -f - -n argocd

## get argocd password
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d