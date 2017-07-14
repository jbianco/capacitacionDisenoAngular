import { CapacitacionPage } from './app.po';

describe('capacitacion App', () => {
  let page: CapacitacionPage;

  beforeEach(() => {
    page = new CapacitacionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
