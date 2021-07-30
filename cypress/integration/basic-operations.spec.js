/// <reference types="cypress" />
import Calculator_PO from "../support/pageObjects/Calculator_PO";
const calc = new Calculator_PO();

describe("Verify that all the numbers and sign buttons are working", () => {
  beforeEach(() => {
    calc.visitHomePage();
  });

  for (let i = 1; i <= 9; i++) {
    it(`Verify that '${i}' button works`, () => {
      calc.clickOnSpecificNumberBtn(i);
      calc.checkResultWith(i);
    });
  }

  it(`Verify that '0' button works`, () => {
    calc.clickOnAnyNumberBtn();
    calc.clickOnSpecificNumberBtn(0);
    cy.get("#display > div").then(($el) => {
      const text = $el.text();
      expect(text[text.length - 1]).eq("0");
    });
  });

  it(`Verify that '.' button works`, () => {
    calc.clickOnAnyNumberBtn();
    calc.clickOnDotBtn();
    cy.get("#display > div").then(($el) => {
      const text = $el.text();
      expect(text[text.length - 1]).eq(".");
    });
  });

  it(`Verify that 'C' button works`, () => {
    calc.clickOnAnyNumberBtn();
    calc.clickOnCBtn();
    calc.checkResultWith("0");
  });

  it(`Verify that '-' button works`, () => {
    calc.clickOnMinusBtn();
    cy.get("#display > div").should("have.text", "-");
  });

  it(`Verify that '=' button works`, () => {
    calc.clickOnSpecificNumberBtn(3);
    calc.clickOnMinusBtn();
    calc.clickOnSpecificNumberBtn(2);
    calc.clickOnEqlBtn();
    calc.checkResultWith("1");
  });

  it(`Verify that '+' button works`, () => {
    calc.clickOnMinusBtn();
    cy.get("#display > div").should("have.text", "-");
  });

  it(`Verify that '÷' button works`, () => {
    calc.clickOnSpecificNumberBtn(3);
    calc.clickOnDivisionBtn();
    calc.clickOnSpecificNumberBtn(3);
    calc.clickOnEqlBtn();
    calc.checkResultWith("1");
  });

  it(`Verify that '×' button works`, () => {
    calc.clickOnSpecificNumberBtn(3);
    calc.clickOnMultBtn();
    calc.clickOnSpecificNumberBtn(3);
    calc.clickOnEqlBtn();
    calc.checkResultWith("9");
  });

  it("Verify that on pressing two operators one after the other, the latest one will override the previous operator.", () => {
    calc.clickOnSpecificNumberBtn(3);
    calc.clickOnMinusBtn();
    calc.clickOnPlusBtn();
    calc.clickOnSpecificNumberBtn(3);
    calc.clickOnEqlBtn();
    calc.checkResultWith(6);
  });

  it(`Verify that hitting ‘C’ cancels any digits or operation added`, () => {
    calc.clickOnSpecificNumberBtn(3);
    calc.clickOnCBtn();
    calc.checkResultWith("0");
  });
});
