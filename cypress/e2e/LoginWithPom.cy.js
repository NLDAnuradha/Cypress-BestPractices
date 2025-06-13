//import Login from "../PageObjects/LoginPage";
import { data } from "ospath";
import Login from "../PageObjects/LoginPageVersion2";

describe('pom', ()=>{

    //Genral Approach
    it('Login Test', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',"Dashboard");

    })

    //using pom
    it('Login Test', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        const ln = new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin();
    })

    //using pom with fixture - reusable
    //refrering data from fixtures and element get from pom 
    it.only('Login Test', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        cy.fixture('orangehrm').then((data)=>{
            const ln = new Login();
                ln.setUserName(data.username)
                ln.setPassword(data.password)
                ln.clickSubmit();
                ln.verifyLogin();
            })
        })
        
})