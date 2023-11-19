import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

import homePage from '../../pages/homePage';

Given('Otwieram strone', () => {
    cy.visit('https://automationexercise.com/'); // Replace with your website URL
    homePage.clickOnLogin()
    cy.pause()
    homePage.fillInput('Name', 'imie')

});

When('Wpisuję login i hasło', () => {
});

And('Klikam w przycisk Zaloguj', () => {
});

Then('Jestem zalogowany do aplikacji', () => {
    // cy.url().should('eq', 'https://example.com/dashboard'); // Replace with the expected URL after successful login
    // cy.contains('Welcome, User!').should('be.visible'); // Replace with an element or text on the dashboard page
});




