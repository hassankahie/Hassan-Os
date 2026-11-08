const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('hassanOS', {
    platform: process.platform,
    appName: 'HASSAN OS'
});