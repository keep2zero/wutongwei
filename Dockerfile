FROM node
CMD ["npm", "run build"]
EXPOSE 5000
CMD ["npm", "start"]