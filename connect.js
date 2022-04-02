const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Tray = electron.Tray;
const fs = require('fs');
//fs.readFileSync('help.txt', 'utf8')

fs.writeFile('assets/ip.txt', process.argv[2], function (err) {if (err) return console.log(err);});

let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({width: 700, height: 700});

  mainWindow.loadFile('assets/index.html');

  mainWindow.on('closed', () => {

    mainWindow = null;

  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {

  if (process.platform !== 'darwin') {

    app.quit();

  }

});

app.on('activate', () => {

  if (mainWindow === null) {

    createWindow();

  }
  
}); 