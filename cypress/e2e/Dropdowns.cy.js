
describe('Handle dropdowns', ()=>{

    it.skip('Dropdown with select', ()=>{ //.skip - skip test case
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Turkey') //select the option from drop down
        .should('have.value', 'Turkey') // check the value


    })

    it.skip('Dropdown without select', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('#select2-reasondummy-container').click()
        cy.get(".select2-search.select2-search--dropdown").type('Visa a').type('{enter}') //type the option from drop down
        cy.get('#select2-reasondummy-container').should('have.text', '×Visa application') // check the value
  
    })

    it('Auto suggest dropdown', ()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Books')
        cy.get(".suggestions-dropdown").contains('Books of the Bible').click() //pass the value and select
        //cy.get('Books of the Bible').should('eq', 'Books of Samuel') // check the value
  
    })

    
})