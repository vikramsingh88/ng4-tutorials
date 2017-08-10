import { Assignment3Page } from './app.po';

describe('assignment3 App', () => {
  let page: Assignment3Page;

  beforeEach(() => {
    page = new Assignment3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
