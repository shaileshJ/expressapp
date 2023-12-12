FROM node:15-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
RUN npm init --y
RUN npm install express
RUN npm install -D nodemon
# If you are building your code for production
# RUN npm ci --only=production
ENV PORT=$APP_PORT
# Bundle app source
COPY . .

EXPOSE 3001
CMD [ "node", "app.js" ]