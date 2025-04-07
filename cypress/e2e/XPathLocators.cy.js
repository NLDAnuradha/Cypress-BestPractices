describe("XPathLocators", () => {
    it('Test - Find no of products', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get(".search_query").type("Dresses") //class selector
        cy.get("[name='submit_search']").click() // attribute
        cy.xpath("//*[@id='center_column']/ul").should('have.length', 1)
    })

    it('Test - chained xpath', () => {
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get(".search_query").type("Dresses") //class selector
        cy.get("[name='submit_search']").click() // attribute
        cy.xpath("//*[@id='center_column']/ul").xpath("./li").should('have.length', 7) //chained xpath
    })
})