# Stage 1: Build the React app
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files and install all dependencies
COPY package*.json ./
RUN npm ci

# Copy rest of the code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Clean default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built app to Nginx html dir
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
