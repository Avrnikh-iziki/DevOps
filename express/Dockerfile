FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 3001
EXPOSE $PORT
CMD ["node","server.js"]
