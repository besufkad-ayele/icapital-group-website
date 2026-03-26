# Use the official Node.js 14 image as the base image
FROM node:21

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the app source code to the working directory
COPY . .    

RUN npm run build

# Expose the port that the app will listen on
EXPOSE 17000

# Start the app
CMD [ "npm", "run", "start" ]