
describe('Check UI Elemets', ()=>{

    it('Checking Radio Buttons', ()=>{
        cy.visit("https://practice.expandtesting.com/radio-buttons")

        //check visibility
        cy.get("#blue").should('be.visible')
        cy.get("#red").should('be.visible')
        cy.get("#yellow").should('be.visible')
        cy.get("#black").should('be.visible')
        cy.get("#green").should('be.visible')

        //selecting radio buttons
        cy.get("#blue").check().should('be.checked')
        cy.get("#red").should('not.be.checked')

        cy.get("#red").check().should('be.checked')
        cy.get("#blue").should('not.be.checked')

    })

    it('Checking CheckBoxes', ()=>{
        cy.visit("https://practice.expandtesting.com/checkboxes")

        //check visibility
        cy.get("#checkbox1").should('be.visible')
        cy.get("#checkbox2").should('be.visible')
        
        //checking check boxes - single 
        cy.get("#checkbox2").check().should('be.checked')

        //uncheck
        cy.get("#checkbox2").uncheck().should('not.be.checked')

        //check all checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        
        //uncheck all 
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        
        //select 1st/last checkbox among multiple checkboxes
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
        

    })
})