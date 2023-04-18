# TypeScript REST API over Kubernetes



- docker build -t my-typescript-app .
- docker run -p 3000:3000 my-typescript-app:latest 
- kubectl apply -f .\deploy\deployment.yaml
- kubectl get deployment
- kubectl get pod
- kubectl apply -f .\deploy\service.yaml
- kubectl get service