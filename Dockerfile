FROM alpine:latest

RUN apk update

RUN mkdir /www

ENV TIMEZONE="Europe/Sofia"
ENV CHROME_BIN=/usr/bin/chromium-browser

RUN apk add tzdata git nodejs npm chromium
RUN npm i -g @angular/cli

RUN rm -rf /etc/localtime \
    && ln -s /usr/share/zoneinfo/${TIMEZONE} /etc/localtime \
    && echo "${TIMEZONE}" > /etc/timezone

WORKDIR www

EXPOSE 4200

ENTRYPOINT ["tail", "-f", "/dev/null"]
