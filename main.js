import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";
import serve from "electron-serve"; // 1. Import the asset server

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2. Initialize serve to target your static Next.js output folder
const loadURL = serve({ directory: path.join(__dirname, "out") });

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // 3. Load via the custom app protocol instead of win.loadFile
  loadURL(win);
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
