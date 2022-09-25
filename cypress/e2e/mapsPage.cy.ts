import { MapsPage } from '../support/pageObject/mapsPage';
import { PageFactory } from '../support/pageObject/pageFactory';
import { CURRENCIES, PAGES, REGIONS, VIEW_TYPES } from '../support/types';

const mapsPage = PageFactory.getPage(PAGES.MAPS) as MapsPage;

describe('Verify Priorbank Maps Page Tests', () => {
  beforeEach(() => {
    mapsPage.openPage();
    cy.intercept('GET', '/maps/Home/_ListGO').as('ATMList');
  });
  it('Verification of the page title', () => {
    mapsPage.verifyPageTitleContainsText('Банкоматы и отделения');
  });
  it('Verification of the Gomel region USD bankomats', () => {
    mapsPage.selectRegion(REGIONS.GOMEL);
    mapsPage.selectCurrency(CURRENCIES.USD);
    mapsPage.selectTypeOfView(VIEW_TYPES.LIST);
    cy.wait('@ATMList').then(({ response }) => {
      expect(response?.statusCode).to.eql(200);
    });
    mapsPage.verifyATMFound();
  });
  it('Verification of the Minsk region EUR bankomats', () => {
    mapsPage.selectRegion(REGIONS.MINSK);
    mapsPage.selectCurrency(CURRENCIES.EUR);
    mapsPage.selectTypeOfView(VIEW_TYPES.LIST);
    cy.wait('@ATMList').then(({ response }) => {
      expect(response?.statusCode).to.eql(200);
    });
    mapsPage.verifyATMFound();
  });
});
