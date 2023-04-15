FROM node

ADD . .

RUN npm install 
RUN npm run build 

CMD npm start
