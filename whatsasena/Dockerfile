FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Agent34567/hagga /root/hagga
WORKDIR /root/hagga/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
