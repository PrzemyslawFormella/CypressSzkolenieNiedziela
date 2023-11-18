/// <reference types="cypress" />

import homePage from "../../pages/homePage";
import loginPage from "../../pages/loginPage";
import user from "../../fixtures/example.json"

it('first test', () => {
    cy.visit('https://automationexercise.com/')

    homePage.clickOnLogin()
    loginPage.login(user.pformella.login, user.pformella.password)

});