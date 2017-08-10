import { Assignment1Page } from './app.po';

describe('assignment1 App', () => {
  let page: Assignment1Page;

  beforeEach(() => {
    page = new Assignment1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
