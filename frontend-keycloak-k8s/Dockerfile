FROM node:14.16.0 as builder

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --prod

CMD ["npm", "start"]

FROM nginx:alpine

COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf

COPY --from=builder app/dist/frontend-keycloak-k8s usr/share/nginx/html