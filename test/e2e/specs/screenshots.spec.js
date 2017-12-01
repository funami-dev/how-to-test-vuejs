module.exports = {
  'make screenshots': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .resizeWindow(360, 480)
      .saveScreenshot('./test/e2e/screenshots/mobile_360x480.png')
      .resizeWindow(480, 360)
      .saveScreenshot('./test/e2e/screenshots/mobile_480x360.png')
      .end();
  },
};
