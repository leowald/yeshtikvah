FROM node:20.16.0

RUN apt-get update

RUN apt-get install -y xdg-utils # For Storybook

WORKDIR /app/front

COPY package.json .
RUN npm i

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 5173

CMD ["npm", "run", "dev"]