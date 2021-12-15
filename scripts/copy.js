const path = require('path');

const fs = require('fs-extra');

const srcPath = path.join(__dirname, '..', 'src', 'data');
const destPath = path.join(__dirname, '..', 'dist', 'data');

async function copyFiles() {
    await fs.copy(srcPath, destPath, { overwrite: true });
}

copyFiles();
