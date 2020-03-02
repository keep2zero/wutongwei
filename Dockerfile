FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm run build
COPY . .
EXPOSE 5000
CMD ["npm", "start"]