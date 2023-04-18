# Use a Node.js base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build TypeScript to JavaScript
RUN npm run build


# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

#FROM node:14 as base

#WORKDIR /home/node/app

#COPY package*.json ./

#RUN npm i

#COPY . .

#FROM base as production

#ENV NODE_PATH=./build

#RUN npm run build
