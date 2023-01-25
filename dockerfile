FROM cypress/base
COPY . .
RUN npm install cypress @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor ts-loader
CMD [ "npm", "run", "cypress:run" ]
