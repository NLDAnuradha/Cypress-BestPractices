describe('My First Test', () => {
  it('Test1 - verify the title', () => {
    //launch web app
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM')
  })

  it('Test2 - verify the title - negative', () => {
      //launch web app
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.title().should('eq','OrangeHRM123')
    })
})

//method 1
//describe('suite name', function() {
//  it('Test2', function() {
//    expect(true).to.equal(false)
//  })
//})

//method 2
//describe('suite name', () => {
//  it('Test2', function() {
//    expect(true).to.equal(false)
//  })
//})