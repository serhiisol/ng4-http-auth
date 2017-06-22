import { NgHttpAuthPage } from './app.po';

describe('ng-http-auth App', () => {
  let page: NgHttpAuthPage;

  beforeEach(() => {
    page = new NgHttpAuthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
