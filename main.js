const  { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 360,
    height: 320,
    fullscreen: false,
    resizable: false,
    frame: false
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('active', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
