module.exports = (config) => {
  config.set({
    basePath: '',
    files: [
      'src/**/*.spec.ts'
    ],
    port: 9876,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    frameworks: [ 'jasmine', 'karma-typescript' ],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-typescript',
      'karma-jasmine-html-reporter'
    ],
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
    },
    client: {
      clearContext: false
    },
    preprocessors: {
      'src/**/*.spec.ts': [ 'karma-typescript' ]
    },
    reporters: [
      'progress',
      'karma-typescript',
      'kjhtml'
    ],
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
  })
}
