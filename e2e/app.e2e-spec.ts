import { FroalaPage } from './app.po';

describe('froala App', function() {
  let page: FroalaPage;

  beforeEach(() => {
    page = new FroalaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
