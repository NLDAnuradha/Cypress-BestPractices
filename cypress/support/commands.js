// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

/// <reference types="cypress-xpath" />



require('cypress-xpath')

//create our own command
Cypress.Commands.add('getIFrame', (iframe)=>{
    return cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})


// custom command for clicking on link using label
Cypress.Commands.add('clickLink', (linkText) => {
    cy.contains('a').click();
});

 //Over write contains()
Cypress.Commands.overwriteQuery('contains', function(originalFn, subject, filter, text, options = {}) {
    // Determine if a filter argument was passed
    if (typeof text === 'object') {
        options = text;
        text = filter;
        filter = undefined;
    }

    // Set matchCase to false for case-insensitive matching
    options.matchCase = false;

    // Call the original function with modified options
    return originalFn.call(this, subject, filter, text, options);
});


 //custom command for login
Cypress.Commands.add('loginapp', (email, password) => {
    cy.get('#Email').should('be.visible').clear().type(email);
    cy.get('#Password').should('be.visible').clear().type(password);
    cy.get('button[type="submit"]').contains('Log in').click();
});

 // Command for waiting for page load
Cypress.Commands.add('waitForPageLoad', () => {
    cy.get('body').should('be.visible');
    cy.wait(1000); // Small buffer for dynamic content
});