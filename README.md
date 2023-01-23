npm init
npm install cypress cypress-cucumber-preprocessor
npm uninstall cypress-cucumber-preprocessor
npm install @badeball/cypress-cucumber-preprocessor
npm install @bahmutov/cypress-esbuild-preprocessor

visual studio code - files - preferences - settings - extensions - cucumber auto complete settings - search for custom parameters section - edit in settings.json and add
"cucumberautocomplete.steps": [
        "cypress/support/step_definitions/*.js"
],