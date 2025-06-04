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

    it.skip('Drag and Drop using Plugin', () => {
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.wait(3000);
        cy.get('#box6').drag('#box106', {force:true}); //captuer the element and drag
    })

    it.only('Scrolling Page', () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-asia.html");
        cy.get(':nth-child(2) > tbody > :nth-child(18) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(2) > tbody > :nth-child(18) > :nth-child(1) > img').should('be.visible');

        //scroll up
        cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(1) > img').should('be.visible');

        //scoll till the end of the page
        cy.get('#footer').scrollIntoView({duration:2000});

    })

    
})