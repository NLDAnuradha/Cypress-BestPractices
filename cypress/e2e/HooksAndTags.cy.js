// Hooks
// Before - at once
// After - at once
// BeforeEach - multiple times before each it bloks
// AfterEach  - multiple times after each it blocks

describe('TestHooksAndTags', ()=>{

    before(()=>{
        //launch app
        cy.log("------------Launch App------------")
    })

    beforeEach(()=>{
        //log in to the application
        cy.log("------------Login------------")
    })

    it('search', ()=>{
        cy.log("------------Searching------------")
    })

    it.skip('Advanced search', ()=>{ // skip tag
        cy.log("------------Advanced Searching------------")
    })

    it.only('Listing Products', ()=>{ // only tag
        cy.log("------------Listing Products------------")
    })

    after(()=>{
        //closing the application
        cy.log("------------Close App------------")
    })

    afterEach(()=>{
        //log out from the application
        cy.log("------------Logout------------")
    })
})