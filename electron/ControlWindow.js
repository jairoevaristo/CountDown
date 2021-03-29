function controlWindow(win, tray) {
  function toggle() {
    if (win.isVisible()) {
      win.hide();
    } else {
      show();
    }
  }

  function show() {
    const { x, y } = getPosition();

    win.setPosition(x, y);
    
    win.show();
    win.focus();
  }

  function getPosition() {
    const winBounds = win.getBounds();
    const trayBounds = tray.getBounds();

    console.log(winBounds, trayBounds)

    const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2));
    const y = Math.round(trayBounds.y - winBounds.height - 10);

    return { x, y };

  }

  return {
    toggle
  }
};

module.exports = controlWindow;