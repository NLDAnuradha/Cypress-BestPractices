class Login{

    setUserName(Username){
        cy.get("input[placeholder='Username']").type(Username);
        
    }

    setPassword(Password){
        cy.get("input[placeholder='Password']").type(Password);
    }

    clickSubmit(){
        cy.get("button[type='submit']").click();
    }

    verifyLogin(){
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',"Dashboard");
    }

}

export default Login;