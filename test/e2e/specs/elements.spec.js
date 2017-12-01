module.exports = {
  'is headline correct': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('h1', 'Lets test vueJs')
      .assert.elementNotPresent('pre')
      .end();
  },
};
