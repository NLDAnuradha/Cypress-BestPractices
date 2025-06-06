// click on link using label
//over writing existing contains() command
//re-usable custom command

describe("Custom commands", ()=>{


    it("Handling Links", ()=>{

        //Direct Action
        cy.visit("https://demo.nopcommerce.com/", { failOnStatusCode: false })
        // cy.get("body > div:nth-child(7) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1) > a:nth-child(1)").click();
        
        //using custom command (commands.js)
        cy.clickLink("Apple MacBook Pro");
        cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro");


    })

    it.only("Overwritting existing commands", ()=>{
        cy.visit("https://demo.nopcommerce.com/", { failOnStatusCode: false })
        
        //using custom command (commands.js)
        cy.clickLink("APPLE MACBOOK PRO");
        cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro");

    })

    it("Login Commands", ()=>{
        
    })

})