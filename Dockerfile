FROM node:20-slim

WORKDIR /app

COPY .output ./

EXPOSE 3001

CMD ["node", "server/index.mjs"]