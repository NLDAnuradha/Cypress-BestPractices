describe('Handle tabs', ()=>{
    it("Approaach 1", ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        //cy.get('.example>a').click(); // we can use like this way, but we can't do anthing in new window

        //removing the target attribute - so it will open the new window in same tab
        cy.get('.example>a').invoke('removeAttr','target').click();
        //check url in new window
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(3000);
        //operations - go back to parent window
        cy.go('back');
    })
})