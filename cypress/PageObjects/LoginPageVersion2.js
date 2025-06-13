class Login{

    txtUserName = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    button = "button[type='submit']";
    labelMsg = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
    
    setUserName(Username){
        cy.get(this.txtUserName).type(Username);
        
    }

    setPassword(Password){
        cy.get(this.txtPassword).type(Password);
    }

    clickSubmit(){
        cy.get(this.button).click();
    }

    verifyLogin(){
        cy.get(this.labelMsg).should('have.text',"Dashboard");
    }

}

export default Login;