describe('TestSuite', ()=>{

    it('Capture Screenshots and Videos', ()=>{
        
        cy.visit('https://automationteststore.com/');

        //capture entire page
        cy.screenshot("Homepage");

        cy.wait(5000);

        //capture specific element 
        cy.get(".row.promo_section").screenshot("FirstElement")
        
        
        //Automatically capture scrnshot & video on failure (only happens when execute through CLI)
        cy.get("ul[id='customer_menu_top'] li a").click();
        cy.get("div[class='col-sm-6 newcustomer'] h2[class='heading2']").should('have.text', "Account Login.");
        

    })
})