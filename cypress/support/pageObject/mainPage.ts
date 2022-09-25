import { BasePage } from './basePage';

export class MainPage extends BasePage {
  constructor() {
    super();
    this.url = '/web';
  }

  public loginIntoSystem(userName: string, password: string) {
    cy.task('log', 'Logging in to the system...');
    cy.login(userName, password);
  }

  public verifyLoginErrorMessage(errorMessage: string) {
    cy.task('log', 'Verifying Login Error messages...');
    cy.get('[id="UserName-error"]').should('have.text', errorMessage);
  }

  public verifyPasswordErrorMessage(errorMessage: string) {
    cy.task('log', 'Verifying Password Error messages...');
    cy.get('[id="Password-error"]').should('have.text', errorMessage);
  }

  public verifyCommonErrorMessage(errorMessage: string) {
    cy.task('log', 'Verifying Common Error messages...');
    cy.get('[class="field-validation-error error_msg"]').should('have.text', errorMessage);
  }
}
