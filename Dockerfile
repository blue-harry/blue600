# the base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY ./.output .


EXPOSE 3000
CMD [ "node", "./server/index.mjs" ]