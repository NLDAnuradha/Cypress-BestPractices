import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe("Mouse Operations", () => {

    // beforeEach("visit website", ()=>{
    //     cy.visit("https://www.opencart.com/index.php?route=cms/demo");
    //     cy.get(".box-overlay[href='https://demo.opencart.com/']").click();
    //     cy.wait(4000);
        
    // })

    it.skip('MouseHover', () => {
        cy.visit("https://demo.opencart.com/");
        
        cy.get("body > main:nth-child(5) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('not.be.visible');
        
        cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/en-gb/catalog/desktops']").trigger('mouseover').click();
        
        cy.get("body > main:nth-child(5) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible');
    })

    it.skip('Right Click', () => {
        cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html");
        
        // first Approach - trigger the event
        // cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');
        // cy.get('.context-menu-icon-copy').should('be.visible');

        //Second Approach - directly perform action
        cy.get(".context-menu-one.btn.btn-neutral").rightclick(); 
    })

    it.skip('Double Click', () => {
        cy.visit("https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_ev_ondblclick");
        cy.wait(7000);
        //before interact with the elements - load the frame
        cy.frameLoaded('#iframeResult');

        //Approach 1 - trigger()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
        cy.get("#demo").should('have.value', 'Hello World');
        
        //Appraoch 2 - dbclick()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.get("#demo").should('have.value', 'Hello World');
        
    })

    it.only('Drag and Drop using Plugin', () => {
        
    })

    it('Scrolling Page', () => {
        
    })

    
})