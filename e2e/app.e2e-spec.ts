import { AppRouterPage } from './app.po';

describe('app-router App', () => {
  let page: AppRouterPage;

  beforeEach(() => {
    page = new AppRouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
