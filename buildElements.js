const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/ng04/runtime.js',
        './dist/ng04/polyfills.js',
        './dist/ng04/scripts.js',
        './dist/ng04/main.js',
    ]
    await fs.ensureDir('./dist/ng04-combined')
    await fs.emptyDir('./dist/ng04-combined')
    await fs.copy('./dist/ng04/assets/', './dist/ng04-combined/assets/')
    await fs.copyFile('./dist/ng04/index.html', './dist/ng04-combined/index.html')
    await fs.copyFile('./dist/ng04/favicon.ico', './dist/ng04-combined/favicon.ico')
    await fs.copyFile('./dist/ng04/styles.css', './dist/ng04-combined/styles.css')
    await concat(files, './dist/ng04-combined/elements.js');
})()