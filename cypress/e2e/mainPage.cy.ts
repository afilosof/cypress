import { MainPage } from '../support/pageObject/mainPage';
import { PageFactory } from '../support/pageObject/pageFactory';
import { PAGES } from '../support/types';
import { getRandomString } from '../support/helpers';

const mainPage = PageFactory.getPage(PAGES.MAIN) as MainPage;

describe('Verify Priorbank Main Page Tests', () => {
  beforeEach(() => {
    mainPage.openPage();
  });
  it('Verification of the page title', () => {
    mainPage.verifyPageTitleContainsText('Интернет-Банк Prior Online');
  });
  it('Verification of the authorization with short login and password', () => {
    mainPage.loginIntoSystem(getRandomString(1), getRandomString(1));
    mainPage.verifyLoginErrorMessage('Поле "Логин" должно быть строкой с минимальной длиной 3 и максимальной 20.');
    mainPage.verifyPasswordErrorMessage('Поле "Пароль" должно быть строкой с минимальной длиной 8 и максимальной 64.');
  });
  it('Verification of the authorization with wrong login and password', () => {
    mainPage.loginIntoSystem(getRandomString(10), getRandomString(10));
    mainPage.verifyCommonErrorMessage('Неверный логин или пароль');
  });
});
