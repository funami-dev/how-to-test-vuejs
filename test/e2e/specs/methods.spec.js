module.exports = {
  'is async methods correct': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('button.getDataFromApi', 'Get async data')
      .click('button.getDataFromApi')
      .waitForElementVisible('.response', 5000)
      .assert.containsText('.response', 'nix gefunden')
      .end();
  },
};
