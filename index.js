'use strict';
const electron = require('electron');
const shell = electron.shell;
const app = electron.app;

const remote = require('electron').remote;

  function minimize(){
    var window = remote.getCurrentWindow();
    window.minimize();
  }

  function close(){
    var window = remote.getCurrentWindow();
    window.close();
  }

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function createMainWindow() {
	const win = new electron.BrowserWindow({
		frame: false,
		width: 750,
		height: 650
	});

	win.loadURL(`file://${__dirname}/index.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});
