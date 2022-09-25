import { PAGES } from '../types';
import { MainPage } from './mainPage';
import { MapsPage } from './mapsPage';

export class PageFactory {
  static getPage(pageName: PAGES) {
    switch (pageName) {
      case PAGES.MAIN:
        return new MainPage();
      case PAGES.MAPS:
        return new MapsPage();
      default:
        return new MainPage();
    }
  }
}
