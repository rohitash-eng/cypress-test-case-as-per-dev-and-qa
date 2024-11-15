export default class CommonObjects{
    elements = {
        username: () => cy.get('input[name="username"]'),
        password: () => cy.get('input[name="password"]')
    }

    loginApp(username, password) {
        this.elements.username().should('exist').clear()
        .type(username).should('have.value', username);

        this.elements.password().should('exist').clear()
        .type(password).should('have.value', password);
        cy.get('button[type="submit"]').should('exist').click();
    }
}