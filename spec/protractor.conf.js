exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['javascript/e2e/*.js'],
  baseUrl: 'http://localhost:3000',
  rootElement: '.supply-compass',
  onPrepare: function() {
    require('protractor-http-mock').config = {
      rootDirectory: process.cwd() + '/spec',
      protractorConfig: 'protractor.conf.js'
    };
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  }
};
