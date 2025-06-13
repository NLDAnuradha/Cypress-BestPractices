//go() command

describe('Test-Navigation', ()=>{

    it('NavigationTest', ()=>{

        cy.visit('https://automationteststore.com/');
        cy.title().should('eq','A place to practice your automation skills!');
        cy.get("ul[id='customer_menu_top'] li a").click();
        cy.get("div[class='col-sm-6 newcustomer'] h2[class='heading2']").should('have.text', "I am a new customer.");

        cy.go('back'); // go back to home page
        cy.title().should('eq','A place to practice your automation skills!');

        cy.go('forward'); // again go to the camera space
        cy.get("div[class='col-sm-6 newcustomer'] h2[class='heading2']").should('have.text', "I am a new customer.");

        cy.reload(); //refresh the page
    })
})