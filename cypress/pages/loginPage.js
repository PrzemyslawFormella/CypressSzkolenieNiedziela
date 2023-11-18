class loginPage {


    elements = {
        emailInput: () => cy.get('[data-qa="login-email"]'),
        passwordInput: () => cy.get('[data-qa="login-password"]'),
        loginBtn: () => cy.get('[data-qa="login-button"]')
    }

    login(email, password) {
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.loginBtn().click();

    }
}

export default new loginPage();