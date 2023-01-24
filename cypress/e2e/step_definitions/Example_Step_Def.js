// cypress/e2e/duckduckgo.ts
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {pageExample} from "../../models/PageExample";

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
  pageExample.typeSomething("Hola");
  pageExample.clickSearchButton();
});