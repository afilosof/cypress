import { CURRENCIES, REGIONS, VIEW_TYPES } from '../types';
import { BasePage } from './basePage';

export class MapsPage extends BasePage {
  constructor() {
    super();
    this.url = '/maps';
  }

  public selectRegion(region: REGIONS) {
    cy.task('log', `Selecting ${region} region...`);
    cy.get("[name='Region_input']").clear().type(region);
  }

  public selectCurrency(currency: CURRENCIES) {
    cy.task('log', `Selecting ${currency} currency...`);
    cy.get(`#cb${currency}`).click();
  }

  public selectTypeOfView(type: VIEW_TYPES) {
    cy.task('log', `Selecting ${type} type of view ...`);
    cy.get(`#lbl${type}`).click();
  }

  public verifyATMFound() {
    cy.task('log', 'Counting ATMs...');
    cy.get('.k-grid-content').find('tbody > tr').its('length').should('be.greaterThan', 0);
  }
}
