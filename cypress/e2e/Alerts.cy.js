
describe('Alerts',()=>{

    //JavaScript Alerts : it will have some text and an 'ok' button

    it('Simple JS Alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        //trigger an event for alert
        cy.on('window:alert', (t)=>{
            //validate message
            expect(t).to.contain('I am a JS Alert');
        })

        //after closing, we validate alert - cypress will automatically close the alert
        cy.get('#result').should('have.text',"You successfully clicked an alert")

    })

    //JavaSrip Confirm Alerts : it will have some text with 'ok' and 'cancel' buttons
    it('Confirmation JS Alert - using ok', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        //trigger an event for confirmation alert
        cy.on('window:confirm', (t)=>{
            //validate message
            expect(t).to.contain('I am a JS Confirm');
        })

        //after closing, we validate alert - cypress will automatically close the alert using 'ok' button
        cy.get('#result').should('have.text',"You clicked: Ok")

    })

    it('Confirmation JS Alert - using cancel', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        //trigger an event for confirmation alert
        cy.on('window:confirm', (t)=>{
            //validate message
            expect(t).to.contain('I am a JS Confirm');
        })

        cy.on('window:confirm', ()=> false); //closing alert using 'cancel' button

        //after closing, we validate alert - cypress will automatically close the alert using 'ok' button
        cy.get('#result').should('have.text',"You clicked: Cancel")

    })

    //JavaScript prompt Alert: it will have some text with a text box for user input along with 'ok' 
    it('Propmt JS Alert', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //before click on button, we get control and put text
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome');
        })
        cy.get("button[onclick='jsPrompt()']").click();

        //after closing, we validate alert - cypress will automatically close the alert using 'ok' button
        cy.on('window:propmt', ()=> false);
        cy.get('#result').should('have.text',"You entered: welcome")

    })

    // Authenticated Alert
    it('Authenticate JS Alert', ()=>{
        //Approach 1
        /*cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth:
            {   username: "admin", 
                password: "admin"}
        })
        
        cy.get("div[class='example'] p").should("have.contain", "Congratulations! You must")
        */

        //Approach 2 - here we input username and password on the URL - (https://admin:admin@the.....)
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should("have.contain", "Congratulations! You must")
    })
})