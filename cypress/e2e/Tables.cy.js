
describe('Handles tables'), (()=>{

    beforeEach('Login', ()=>{
        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get(' #input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get("button[type='submit']").click();

        cy.get('.btn-close').click();
        //navigate to the customers page
        cy.get('#menu-customer>a').click(); //customer main menu
        cy.get('#menu-customer>ul>li:first-child').click(); //customer sub/child item select

    })

    it('Check number of rows and columns', ()=>{
        

    })

    it('Check cell data from specific row and column', ()=>{

    })

    it('Read all the rows and columns data in the first page', ()=>{

    })

    it('Pagination', ()=>{

    })

})