class LoginPage {
    loginObject = {
        todolyLogo: () => cy.get("[src='/Images/logo2.png']"),
        signUpButton: () => cy.get(".HPHeaderSignup"),
        signUpModal: () => cy.get(".HPsignupDiv"),
        name: () => cy.get("#ctl00_MainContent_SignupControl1_TextBoxFullName"),
        email: () => cy.get("#ctl00_MainContent_SignupControl1_TextBoxEmail"),
        pass: () => cy.get("#ctl00_MainContent_SignupControl1_TextBoxPassword"),
        timezone: () => cy.get("#ctl00_MainContent_SignupControl1_DropDownTimezone"),
        checkBoxTerms: () => cy.get("#ctl00_MainContent_SignupControl1_CheckBoxTerms"),
        buttonSignup: () => cy.get("#ctl00_MainContent_SignupControl1_ButtonSignup"),
        mainTableLeft: () => cy.get(".MainTableLeft"),
        linkButtonLogout: () => cy.get("#ctl00_HeaderTopControl1_LinkButtonLogout")
    }

    checkLogoPrecense(){
        this.loginObject.todolyLogo().should("be.visible");
    }

    clickSignUp(){
        this.loginObject.signUpButton().click();
    }

    checkModalPrecense(){
        this.loginObject.signUpModal().should("be.visible");
    }

    typeName(name){
        this.loginObject.name().type(name);
    }

    typeEmail(email){
        this.loginObject.email().type(email);
    }

    typePass(pass){
        this.loginObject.pass().type(pass);
    }

    chooseTimezome(timezone){
        this.loginObject.timezone().get(`[value='${timezone}']`).click({force: true});
    }

    clickCheckBoxTerms(){
        this.loginObject.checkBoxTerms().click();
    }

    clickButtonSignup(){
        this.loginObject.buttonSignup().click();
    }

    checkLeftTablePrecense(){
        this.loginObject.mainTableLeft().should("be.visible");
    }

    logout(){
        this.loginObject.linkButtonLogout().should("be.visible");
        this.loginObject.linkButtonLogout().click();
    }

}

export const loginPage = new LoginPage();