/// <reference types="cypress" />
import Calculator_PO from "../support/pageObjects/Calculator_PO";
const calc = new Calculator_PO();
var number1 = calc.getRandomNumber();
var number2 = calc.getRandomNumber();

describe("Verify the addition functionality", () => {
  beforeEach(() => {
    calc.visitHomePage();
  });

  it("Verify the addition of two integer numbers", () => {
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnPlusBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    calc.checkResultWith(number1 + number2);
  });

  it("Verify the addition of one positive and one negative number", () => {
    calc.clickOnMinusBtn();
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnPlusBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    calc.checkResultWith(-number1 + number2);
  });

  it("Verify the addition of one decimal and one integer number", () => {
    calc.clickOnDotBtn();
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnPlusBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    let numberOne = Number(`0.${number1}`);
    calc.checkResultWith(numberOne + number2);
  });

  it("Verify the addition of two decimal numbers", () => {
    calc.clickOnDotBtn();
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnPlusBtn();
    calc.clickOnDotBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    let numberOne = Number(`0.${number1}`);
    let numberTwo = Number(`0.${number2}`);
    let res = (numberOne * 10 + numberTwo * 10) / 10;
    calc.checkResultWith(res);
  });
});

describe("Verify the subtraction functionality", () => {
  beforeEach(() => {
    calc.visitHomePage();
  });

  it("Verify the subtraction of two integer numbers", () => {
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnMinusBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    calc.checkResultWith(number1 - number2);
  });

  it("Verify the subtraction of one positive and one negative number", () => {
    calc.clickOnMinusBtn();
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnMinusBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    calc.checkResultWith(-number1 - number2);
  });

  it("Verify the subtraction of one decimal and one integer number", () => {
    calc.clickOnDotBtn();
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnMinusBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    let numberOne = Number(`0.${number1}`);
    calc.checkResultWith(numberOne - number2);
  });

  it("Verify the subtraction of two decimal numbers", () => {
    calc.clickOnDotBtn();
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnMinusBtn();
    calc.clickOnDotBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    let numberOne = Number(`0.${number1}`);
    let numberTwo = Number(`0.${number2}`);
    let res = (numberOne * 10 - numberTwo * 10) / 10;
    calc.checkResultWith(res);
  });
});

describe("Verify the multiplication functionality", () => {
  beforeEach(() => {
    calc.visitHomePage();
  });

  it("Verify the multiplication of two integer numbers", () => {
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnMultBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    calc.checkResultWith(number1 * number2);
  });

  it("Verify the multiplication of one positive and one negative number", () => {
    calc.clickOnMinusBtn();
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnMultBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    calc.checkResultWith(-number1 * number2);
  });

  it("Verify the multiplication of one decimal and one integer number", () => {
    calc.clickOnDotBtn();
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnMultBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    let numberOne = Number(`0.${number1}`);
    let res = (numberOne * 10 * number2) / 10;
    calc.checkResultWith(res);
  });

  it("Verify the multiplication of two decimal numbers", () => {
    calc.clickOnDotBtn();
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnMultBtn();
    calc.clickOnDotBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    let numberOne = Number(`0.${number1}`);
    let numberTwo = Number(`0.${number2}`);
    let res = (numberOne * 10 * (numberTwo * 10)) / 100;
    calc.checkResultWith(res);
  });
});

describe("Verify the division functionality", () => {
  beforeEach(() => {
    calc.visitHomePage();
  });

  it("Verify the division of two integer numbers", () => {
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnDivisionBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    let res = number1 / number2;
    res = res < 1 ? Number(res.toFixed(9)) : Number(res.toFixed(8));
    calc.checkResultWith(res.toString());
  });

  it("Verify the division of one positive and one negative number", () => {
    calc.clickOnMinusBtn();
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnDivisionBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    let res = -number1 / number2;
    res = res < 1 ? Number(res.toFixed(9)) : Number(res.toFixed(8));
    calc.checkResultWith(res.toString());
  });

  it("Verify he division of a number by zero.", () => {
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnDivisionBtn();
    calc.clickOnSpecificNumberBtn(0);
    calc.clickOnEqlBtn();
    calc.checkResultWith("Error");
  });

  it("Verify he division of zero by any number.", () => {
    calc.clickOnSpecificNumberBtn(0);
    calc.clickOnDivisionBtn();
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnEqlBtn();
    let res = 0 / number1;
    calc.checkResultWith(res);
  });

  it("Verify the division of one decimal and one integer number", () => {
    calc.clickOnDotBtn();
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnDivisionBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    let numberOne = Number(`0.${number1}`);
    let res = (numberOne * 10) / number2 / 10;
    const arr = res.toString().split("");
    if (arr.length > 10) {
      res = res.toFixed(9);
      res = res.substring(0, res.length - 1);
      cy.get("#display > div").then(($el) => {
        cy.log($el.text());
        expect($el.text()).includes(res);
      });
    } else {
      calc.checkResultWith(res);
    }
  });

  it("Verify the division of two decimal numbers", () => {
    calc.clickOnDotBtn();
    calc.clickOnSpecificNumberBtn(number1);
    calc.clickOnDivisionBtn();
    calc.clickOnDotBtn();
    calc.clickOnSpecificNumberBtn(number2);
    calc.clickOnEqlBtn();
    let numberOne = Number(`0.${number1}`);
    let numberTwo = Number(`0.${number2}`);
    let res = ((numberOne * 10) / (numberTwo * 10));
	cy.log(res)
    const arr = res.toString().split("");
    if (arr.length > 10) {
      res = res.toFixed(9);
      res = res.substring(0, res.length - 1);
      cy.get("#display > div").then(($el) => {
        cy.log($el.text());
        expect($el.text()).includes(res);
      });
    } else {
      calc.checkResultWith(res);
    }
  });
});
