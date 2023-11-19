/// <reference types="cypress-xpath" />
require('cypress-xpath');
class homePage {

    elements = {
        login: () => cy.get('.shop-menu > .nav > :nth-child(4) > a'),
        logOffBtn: () => cy.get('logout')
    }

    clickOnLogin() {
        this.elements.login().click()
    }

    fillInput(label, text) {
        cy.xpath('//label[text()="' + label + ' "]/following-sibling::input').type(text)
        // cy.xpath("//input[@name='userName']").should("be.visible");

    }
}

export default new homePage();