import { BccPage } from './app.po';

describe('bcc App', () => {
  let page: BccPage;

  beforeEach(() => {
    page = new BccPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
