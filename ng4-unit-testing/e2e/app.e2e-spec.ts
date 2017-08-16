import { Ng4UnitTestingPage } from './app.po';

describe('ng4-unit-testing App', () => {
  let page: Ng4UnitTestingPage;

  beforeEach(() => {
    page = new Ng4UnitTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
