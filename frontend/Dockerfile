### STAGE 1: Build ###
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . ./
RUN npm run build

### STAGE 2: Production ###
FROM nginx:1.21.6-alpine

# Copy the built React app to Nginx's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy our custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 6666
EXPOSE 6666

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
