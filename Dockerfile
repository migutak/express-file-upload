FROM node:16-buster-slim

RUN usermod -aG sudo node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
RUN mkdir -p /app/nfs/demandletters && mkdir /app/nfs/uploads

COPY package*.json ./
RUN npm install --production

# Bundle app source code
COPY --chown=node . .

RUN chmod -R 777 /app/nfs/uploads && chmod -R 777 /app/nfs/demandletters
# USER node
#EXPOSE 4005
EXPOSE 4005

CMD ["node", "server.js"]

# docker build -t migutak/file_uploads:5.3.2 .
