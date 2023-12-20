FROM cypress/included:13.3.2
WORKDIR /app
COPY . .
RUN npm install
ENTRYPOINT [ "npm","run","cypress:server" ]
