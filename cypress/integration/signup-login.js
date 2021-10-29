/// <reference types="Cypress" />


describe("Register a new user", () => {
    let randomString = Math.random().toString(36).substring(2);
    const email = "auto_" + randomString + randomString + "@gmail.com";
    const password = "Password1";
    const securityAnswer = "Hello world"

    it("Verify registration of a new user", () => {
        cy.visit("http://localhost:3000/#/")
        cy.get('.cdk-overlay-backdrop').click(-50, -50, { force: true })
        cy.get('#navbarAccount').click()
        cy.get('#navbarLoginButton').click()
        cy.get('#newCustomerLink >').contains('Not yet a customer?').click({ force: true })
        cy.get("#emailControl").type(email)
        cy.get("#passwordControl").type(password)
        cy.get("#repeatPasswordControl").type(password)
        cy.get('.mat-form-field-type-mat-select > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
        cy.get('#mat-option-4 > .mat-option-text').click()
        cy.get('#securityAnswerControl').type(securityAnswer)
        cy.get('#registerButton').click()
        cy.get('.mat-simple-snackbar > :nth-child(1)').contains('Registration completed successfully. You can now log in.')

    })
})


