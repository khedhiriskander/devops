import { Vynd.Manager.WebPage } from './app.po';

describe('vynd.manager.web App', () => {
  let page: Vynd.Manager.WebPage;

  beforeEach(() => {
    page = new Vynd.Manager.WebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
