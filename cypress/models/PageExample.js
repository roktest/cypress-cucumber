class PageExample {
    elements = {
      logoDockGo: ()=> cy.get("#logo_homepage_link"),
      inputDockGo: ()=> cy.get("#search_form_input_homepage"),
      submitInputBtn: ()=> cy.get("#search_button_homepage")
    };
  
    typeSomething(something) {
      this.elements.inputDockGo().type(something);
    }
  
    clickSearchButton() {
      this.elements.submitInputBtn().click();
    }
  
    inputValidation(){
      this.elements.inputDockGo().should(
        "have.attr",
        "placeholder",
        "Search the web without being tracked"
      )
    }

  }
  
  export const pageExample = new PageExample();