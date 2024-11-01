# Dockerfile for Auth Service

# Use Node.js as base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 5001 (or the port your auth service uses)
EXPOSE 5001

# Start the auth server
CMD ["node", "auth.js"]
