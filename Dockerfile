FROM node:20.9.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable
COPY --from=build /app/dist/clientapp/ /usr/share/nginx/html
EXPOSE 80
