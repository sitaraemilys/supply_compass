describe('MainController', () => {
  beforeEach(module('supplyCompass'));

  beforeEach(inject(($controller) => {
    main = $controller('MainController');
  }));


  describe('#scrape', () => {
    it('posts the scrape URL and receives the scraped data', () => {
      expect(main.info).toEqual("some information")
    });
  });
});
