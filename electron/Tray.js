const { Tray } = require('electron');
const { resolve } = require('path');

function createTray() {
  const tray = new Tray(resolve(__dirname, '../', 'assets', 'biblia.png'));

  return tray;
}

module.exports = createTray();