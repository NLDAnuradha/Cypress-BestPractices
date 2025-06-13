// click on link using label
//over writing existing contains() command
//re-usable custom command
/// <reference types="cypress" />

describe("Custom commands", ()=>{

    beforeEach(() => {
        // Clear cookies and cache before each test
        cy.clearCookies();
        cy.clearLocalStorage();
        
        // Add memory cleanup
        cy.window().then((win) => {
            win.sessionStorage.clear();
        });
    });

    afterEach(() => {
        // Additional cleanup after each test
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it("Handling Links", ()=>{

        //Direct Action
        cy.visit("https://demo.nopcommerce.com/", { failOnStatusCode: false })
        // cy.get("body > div:nth-child(7) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1) > a:nth-child(1)").click();
        //cy.get('#IsBG6 > :nth-child(1) > div').click();
        //using custom command (commands.js)
        cy.clickLink("Apple MacBook Pro");
        cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro");


    })

    it("Overwritting existing commands", ()=>{
        cy.visit("https://demo.nopcommerce.com/", { failOnStatusCode: false })
        
        //using custom command (commands.js)
        cy.clickLink("APPLE MACBOOK PRO");
        cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro");

    })

    it("Login Commands", () => {
    cy.visit("https://demo.nopcommerce.com/", { failOnStatusCode: false });
    
    // Wait for page to load
    cy.waitForPageLoad();
    
    // Use custom command to click login link
    cy.clickLink("Log in");
    
    // Use custom login command
    cy.loginapp("test@gmail.com", "test123");
    
    // Check if login was successful
    cy.get(".ico-account").should('contain.text', "My account");
});
});