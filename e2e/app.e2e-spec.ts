import { CyberopsPage } from './app.po';

describe('cyberops App', () => {
  let page: CyberopsPage;

  beforeEach(() => {
    page = new CyberopsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
