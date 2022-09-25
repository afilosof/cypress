export class BasePage {
  protected url!: string;

  constructor() {}

  public getPageTitle() {
    return cy.title();
  }

  public openPage() {
    cy.visit(this.url);
  }

  public verifyPageTitleContainsText(text: string) {
    this.getPageTitle().should('eq', text);
  }
}
