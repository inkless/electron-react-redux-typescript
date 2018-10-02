import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import url from 'url';

let win: BrowserWindow | null;

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload)),
  ).catch(console.log);
};

const createWindow = async () => {
  if (process.env.NODE_ENV !== 'production') {
    await installExtensions();
  }

  win = new BrowserWindow({ width: 800, height: 600 });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    }),
  );

  if (process.env.NODE_ENV !== 'production') {
    // Open DevTools
    win.webContents.openDevTools();
    require('devtron').install();
  }

  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

ipcMain.on('command', (event: Event, command: string, data: any) => {
  if (win) {
    win.webContents.send(command, data);
  }
});
