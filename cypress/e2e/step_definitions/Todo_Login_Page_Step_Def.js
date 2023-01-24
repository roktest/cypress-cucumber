import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../models/LoginPage";


Given(`the user navigates to {string} home page`, (url)=>{
    cy.visit(url);
    cy.log(Cypress.env);
});

When(`user see todo.ly logo`, ()=>{
    //cy.get("[src='/Images/logo2.png']").should("be.visible");
    loginPage.checkLogoPrecense();
});

When(`user click on sign up free button`, ()=>{
    //cy.get(".HPHeaderSignup").click();
    loginPage.clickSignUp();
});

When(`popup appears`, ()=>{
    //cy.get(".HPsignupDiv").should("be.visible");
    loginPage.checkModalPrecense();
});

When(`user completes full name field with {string}`, (name)=>{
    //cy.get("#ctl00_MainContent_SignupControl1_TextBoxFullName").type(name);
    loginPage.typeName(name);
});

When(`user completes email with {string}`, (email)=>{
    //cy.get("#ctl00_MainContent_SignupControl1_TextBoxEmail").type(email);
    loginPage.typeEmail(email + setId() + "@mailinator.com" );
});

When(`user completes pass with {string}`, (pass)=>{
    //cy.get("#ctl00_MainContent_SignupControl1_TextBoxPassword").type(pass);
    loginPage.typePass(pass);
});

When(`user completes timezone with {string} time zone`, (timezone)=>{
    //cy.get("#ctl00_MainContent_SignupControl1_DropDownTimezone").get(`[value='${timezone}']`).click({force: true});
    loginPage.chooseTimezome(timezone);
});

When(`user accepts terms of service`, ()=>{
    //cy.get("#ctl00_MainContent_SignupControl1_CheckBoxTerms").click();
    loginPage.clickCheckBoxTerms();
});

When(`user clicks on signup button to make the form submission`, ()=>{
    //cy.get("#ctl00_MainContent_SignupControl1_ButtonSignup").click();
    loginPage.clickButtonSignup();
});

Then(`user enter the application where he can see the left menu`, ()=>{
    //cy.get(".MainTableLeft").should("be.visible");
    loginPage.checkLeftTablePrecense();
});

When(`it is able to logout`, ()=>{
    //cy.get("#ctl00_HeaderTopControl1_LinkButtonLogout").should("be.visible");
    //cy.get("#ctl00_HeaderTopControl1_LinkButtonLogout").click();
    loginPage.logout();
});

function setId() {
    return Math.floor(Math.random() * (1, 999999) + 1);
}