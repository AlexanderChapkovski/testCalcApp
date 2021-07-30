# testCalcApp Nuix SDET Assignment
# My annotation
- I used **Cypress** to drive the web based calculator.
- I created folder **pageObjects** and used POM pattern to interact with app, you can find the file in `support/pageObjects/Calculator_PO.js`.
- There are some negative testing scenarios for this calc app, but we can create much more depending of requirements.
- I  tried to cover the most common test scenarios because we can create scripts for a very long time, but we need requirements for that.

# Running tests
This project uses NodeJS( Node 14+ ) and NPM and Cypress.
Run `npm install` to install dependencies.
- To run the tests in production environment, run `npm run test-production` 
- To run the tests in staging environment, run `npm run test-staging` 

They will begin to run in a "headfull" Chromium browser.

# Bugs
Based on my tests suites, I was able to identify bugs in staging env:
- The button '5' doesn't work properly (Actual Result: outputs '6' instead).
- Multiplication operation doesn't work as it should be (Actual Result: outputs result more by 2).
- Division operation where result must be decimal number outputs wrong result.
- Any operation with decimal number outputs wrong result.

