import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When(`the user types the first name`, ()=>{
    cy.get("[name=first_name]").type("john");
});

When(`the user types the last name`, ()=>{
    cy.get("[name=last_name]").type("doe");
});

When(`the user types the email address`, ()=>{
    cy.get("[name=email]").type("john@email.com");
});

When(`the user types the comment`, ()=>{
    cy.get("[name=message]").type("this is a fake message testing, unfortunately if you are reading this... the pot really cabed you!");
});

When(`the user clicks submit button`, ()=>{
    cy.get("[value='SUBMIT']").invoke("removeAttr", "target").click();
});

Then(`user should see a successful contact us submission message`, ()=>{
    cy.get("#contact_reply h1").should("have.text", "Thank You for your Message!");
});