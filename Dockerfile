FROM node
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]