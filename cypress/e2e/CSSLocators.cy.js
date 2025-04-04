
describe('CSSlocators', () => {
    
it("Test CSSLocator", () => {
    cy.visit("https://www.automationexercise.com/products")

    cy.get("#search_product").type("T-Shirts")
    cy.get("#submit_search").click()
    

})
})