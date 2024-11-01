# Use Node 18 as base image for backend
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
