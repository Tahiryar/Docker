# Node.js lightweight version use karein
FROM node:16-alpine

# Working directory set karein
WORKDIR /app

# Package files copy karein
COPY package.json ./

# Dependencies install karein
RUN npm install

# Puri app copy karein
COPY . .

# Port expose karein
EXPOSE 3000

# Start command
CMD ["node", "server.js"]
