import { Assignment4Page } from './app.po';

describe('assignment4 App', () => {
  let page: Assignment4Page;

  beforeEach(() => {
    page = new Assignment4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
