import { Assignment2Page } from './app.po';

describe('assignment2 App', () => {
  let page: Assignment2Page;

  beforeEach(() => {
    page = new Assignment2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
