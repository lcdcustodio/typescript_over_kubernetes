# TypeScript REST API over Kubernetes



1 - docker build -t my-typescript-app .
2 - docker run -p 3000:3000 my-typescript-app:latest 
3 - kubectl apply -f .\deploy\deployment.yaml
4 - kubectl get deployment
5 - kubectl get pod
6 - kubectl apply -f .\deploy\service.yaml
7 - kubectl get service