FROM node:gallium
 
WORKDIR /usr/src/app/
 
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .

EXPOSE 4200
 
# Install any needed packages
RUN npm install
 
# Bundle app source
COPY . .
 
 
CMD [ "npm", "start" ]
