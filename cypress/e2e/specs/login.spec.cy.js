import CommonObjects from "../common/common-object";

const environment = Cypress.env('AppEnvironment');
const loginCredentials = require(`../../fixtures/${environment}/login-credentials.json`);
const commonObjects = new CommonObjects();

describe('Login and Logout verification test case', () => {
    before(function () {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.visit('auth/login');
    });
    it('TEST_CASE_01: Verify login and logout with incorrect credentials', () => {
        commonObjects.loginApp(loginCredentials.incorrectUsername, loginCredentials.incorrectPassword);
        cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('exist')
        .and('contain.text', 'Invalid credentials');
    });
    it('TEST_CASE_02: Verify login and logout with correct credentials', () => {
        commonObjects.loginApp(loginCredentials.username, loginCredentials.password);
        cy.wait(1000);
        cy.url().should('includes','dashboard/index');
        cy.wait(2000);
        cy.get('.oxd-userdropdown-tab').should('exist').click();
        cy.contains('Logout').should('exist').click();
        cy.wait(2000);
        cy.url().should('includes','auth/login');
    });
    it('TEST_CASE_03: Verify logout', () => {
        commonObjects.loginApp(loginCredentials.username, loginCredentials.password);
        cy.wait(2000);
        cy.get('.oxd-userdropdown-tab').should('exist').click();
        cy.contains('Logout').should('exist').click();
        cy.wait(2000);
        cy.url().should('includes','auth/login');
    });
    
});