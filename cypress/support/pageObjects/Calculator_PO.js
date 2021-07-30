class Calculator_PO {
  getRandomNumber() {
    var random = Math.floor(Math.random() * 9) + 1;
    return random;
  }

  visitHomePage() {
    cy.visit("/" + Cypress.env("stagingEnv"));
  }
  checkResultWith(str) {
    cy.get("#display > div").should("have.text", str);
  }

  clickOnSpecificNumberBtn(num) {
    cy.get(`input[value='${num}']`).click();
  }

  clickOnAnyNumberBtn() {
    cy.get(`input[value='${this.getRandomNumber()}']`).click();
  }

  clickOnCBtn() {
    cy.get(`input[value='C']`).click();
  }

  clickOnMinusBtn() {
    cy.get(`input[value='-']`).click();
  }

  clickOnPlusBtn() {
    cy.get(`input[value='+']`).click();
  }

  clickOnDivisionBtn() {
    cy.get(`input[value='÷']`).click();
  }

  clickOnMultBtn() {
    cy.get(`input[value='×']`).click();
  }

  clickOnEqlBtn() {
    cy.get(`input[value='=']`).click();
  }

  clickOnDotBtn() {
    cy.get(`input[value='.']`).click();
  }
}
export default Calculator_PO;
