describe('TestSuite', ()=>{

    it('Capture Screenshots and Videos', ()=>{
        //capture as we wish
        cy.visit('https://automationteststore.com/');
        cy.screenshot("Homepage");

        cy.wait(5000);
        //specifi element
        cy.get(".row.promo_section").screenshot("FirstElement")
        // captuer if we got failed
    })
})