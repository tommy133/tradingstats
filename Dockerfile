FROM node:latest

# Create app directory
WORKDIR /app

#Set db host to the IP address of the container
ENV DB_HOST=172.17.0.2

# Copy the package.json and package-lock.json files to /app 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . /app

# Expose port
EXPOSE 8080

# Start the server
CMD ["npm","start"]