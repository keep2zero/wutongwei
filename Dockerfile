FROM node
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./
COPY webapp ./
COPY blog ./
RUN npm install
RUN npm run build
COPY dist ./
EXPOSE 5000
CMD ["npm", "start"]