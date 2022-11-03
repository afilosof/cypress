import 'cypress-file-upload';

Cypress.Commands.add('login', (userName: string, password: string) => {
  cy.get('[name="UserName"]').clear().type(userName);
  cy.get('[name="Password"]').clear().type(password);
  cy.get('.login-buttons > .btn').click();
});
