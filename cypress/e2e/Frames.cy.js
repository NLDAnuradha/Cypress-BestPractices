import "cypress-iframe"

describe("handling Frames",()=>{

    it('Approach 1', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.get("div[aria-label='Close'] svg").click()
        const iframe=cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

            iframe.clear().type('welcome {cmd+a}');

            cy.get("[aria-label='Bold']").click();
    })

    it('Approach 2 - by using custom command', ()=>{
      cy.visit('https://the-internet.herokuapp.com/iframe');
      cy.get("div[aria-label='Close'] svg").click()
      cy.getIFrame('#mce_0_ifr').clear().type('welcome {cmd+a}');
      cy.get("[aria-label='Bold']").click();
    })

    it.only('Approach 2 - by using cypress-iframe plugin', ()=>{
      cy.visit('https://the-internet.herokuapp.com/iframe');
      cy.get("div[aria-label='Close'] svg").click()
      cy.frameLoaded('#mce_0_ifr'); //load the frame
      //interacted with the frame - get, clear existing text and type
      cy.iframe('#mce_0_ifr').clear().type("Welcome {cmd+a}"); //{cmd+a} -> select all text for bold
      cy.get("[aria-label='Bold']").click();
    })

        //cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
        //cy.get("#iFrame").click()     
  

    it('Interact with TinyMCE iFrame', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.get('#mce_0_ifr').then(($iframe) => {
          const body = $iframe.contents().find('body');
          cy.wrap(body).find('#tinymce').clear().type('Hello, Cypress!');
        });
        cy.get('#mce_0_ifr').contents().find('#tinymce').should('contain', "Your content goes here.");
      });
})