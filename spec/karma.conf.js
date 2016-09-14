module.exports = function(config){
    config.set({

      basePath : '../',

      files : [
        'lib/assets/bower_components/angular/angular.js',
        'lib/assets/bower_components/angular-mocks/angular-mocks.js',
        'app/assets/javascripts/angular-app/**/!(jquery|application).js',
        'spec/javascript/units/**/*.js'
      ],

      autoWatch : true,

      frameworks: ['jasmine'],

      browsers : ['Chrome'],

      plugins : [
              'karma-chrome-launcher',
              'karma-jasmine',
              "karma-spec-reporter"
      ],

      reporters: ["spec"],
        specReporter: {
        maxLogLines: 5,
        suppressErrorSummary: true,
        suppressFailed: false,
        suppressPassed: false,
        suppressSkipped: true,
        showSpecTiming: false
      },
    });
};
