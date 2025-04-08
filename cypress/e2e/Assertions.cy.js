

describe("Assertions demo", () => {

    it("Implicit Assertions", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        //implicit asserstion - check URL - should keyword

        //mwthod 1
        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'orangehrm')

        //method 2
        // cy.url().should('include','orangehrmlive.com')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain', 'orangehrm')

        //method 3 - and keyword
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        .and('not.contain', 'HRN')
        
        //check title 
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain', 'HRM')

        //check logo is visible
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        //check multiple elements - capture all links on the webpage
        cy.xpath("//a").should('have.length', '5')

        //validate value of the element
        cy.get("input[placeholder='Username']").type("Admin") //input data
        cy.get("input[placeholder='Username']").should('have.value','Admin') // value checking
        

    })
})