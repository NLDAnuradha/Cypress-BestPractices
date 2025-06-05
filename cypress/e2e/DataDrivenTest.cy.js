describe("DDTest",()=>{

    it("DataDrivenTest", ()=>{
        // Handle uncaught exceptions for this test
        cy.on('uncaught:exception', (err, runnable) => { 
        if (err.message.includes("Cannot read properties of undefined (reading 'response')")) {
            return false;
        }
        return true;
    });
        cy.fixture("orangehrm2").then((data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
            data.forEach((userdata)=>{
            cy.get("input[placeholder='Username']").type(userdata.username);
            cy.get(" input[placeholder='Password']").type(userdata.password);
            cy.get("button[type='submit']").click();

            if(userdata.username === 'Admin' && userdata.password === 'admin123'){
                cy.get(".oxd-topbar-header-title").should('have.text',userdata.expected);

                cy.get(".oxd-userdropdown-tab > .oxd-icon").click(); //logout
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                
            }
            else {
                cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text',userdata.expected);
            
            }
            
            })
        })

    })

})