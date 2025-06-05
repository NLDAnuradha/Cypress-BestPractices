const { data } = require("ospath")

describe("FixturesTest",()=>{

    //Direct Access
    // it("FixturesDemoTest", ()=>{
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
    //     cy.fixture('orangehrm').then( (data)=>{
    //         cy.get("input[placeholder='Username']").type(data.username)
    //         cy.get(" input[placeholder='Password']").type(data.password)
    //         cy.get("button[type='submit']").click()
    //         cy.get(".oxd-topbar-header-title").should('have.text',data.expected);
   
    //     })
    //      })

    //Access through Hook - for multiple it blocks
    let userdata;
    before(()=>{
        cy.fixture("orangehrm").then((data)=>{
            userdata=data;
        })
    })
    
    it("FixturesDemoTest", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
         cy.get("input[placeholder='Username']").type(userdata.username)
         cy.get(" input[placeholder='Password']").type(userdata.password)
         cy.get("button[type='submit']").click()
         cy.get(".oxd-topbar-header-title").should('have.text',userdata.expected);
   
    })
})