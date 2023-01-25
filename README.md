# Example project using Node, Cypress, Cucumber & Docker
Example repository using cypress and cucumber and page object model with dockerfile

## Dependencies
- nodejs installed
- npm init

## Package commands
- npm install cypress
- npm install @badeball/cypress-cucumber-preprocessor 
- npm install @bahmutov/cypress-esbuild-preprocessor

## Cypress Execution commands
- cypress:open
- cypress:run (headless)

## Docker Execution commands
- docker build . -t cypress-cucumber-example (to create image)
- docker images (to see created images)



## Useful info
visual studio code - files - preferences - settings - extensions - cucumber auto complete settings - search for custom parameters section - edit in settings.json and add
"cucumberautocomplete.steps": [
        "cypress/support/step_definitions/*.js"
],