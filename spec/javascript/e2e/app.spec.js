describe("supply compass frontend",() => {

  beforeEach(() => {
    browser.get('/');
  });


  it('first test', () => {
    // expect(true).toEqual(true)
    var titles = $$('h1')
    expect(titles.get(0).getText()).toEqual('Hi Sity')
    expect(titles.get(1).getText()).toEqual('some information')
  })
})
