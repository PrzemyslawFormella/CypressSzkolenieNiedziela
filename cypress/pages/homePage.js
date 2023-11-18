class homePage {

    elements = {
        login: () => cy.get('.shop-menu > .nav > :nth-child(4) > a'),
        logOffBtn: () => cy.get('logout')
    }

    clickOnLogin() {
        this.elements.login().click()
    }
}

export default new homePage();