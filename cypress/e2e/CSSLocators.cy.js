
describe('CSSlocators', () => {
    
it("Test - CSSLocator", () => {

    cy.visit("http://www.automationpractice.pl/index.php") //launch website

    //cy.get("#search_query_top").type("T-Shirts") //id selector
    cy.get("[name='search_query']").type("T-Shirts") //attribute - name selector
   // cy.get(".search_query").type("T-Shirts") //class selector

    cy.get("[name='submit_search']").click() // attribute

    cy.get(".lighter").contains("T-Shirts") //Assertion - class

    

})
})